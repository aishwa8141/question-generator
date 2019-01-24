import React from "react";
import {
  Container,
  Button,
  Form,
  Grid,
  Header,
  Image,
  Segment,
  Icon,
  Divider
} from "semantic-ui-react";
import QrReader from "react-qr-scanner";
import "../css/style.css";
import axios from "axios";
import API from "../utils/Api";
import SessionIdGenerator from "../utils/SessionIdGenerator";
class Login extends React.Component {
  constructor(props) {
    super(props);
    // userService.logout();
    this.state = {
      submitted: false,
      loading: false,
      error: "",
      delay: 1000,
      userid: "",
      isRedirect : false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScan = this.handleScan.bind(this);
  }
  handleChange(e) {
    this.setState({ userid: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const userid = this.state.userid;
    if (!userid) {
      return;
    }
    this.setState({ submitted: true });
    sessionStorage.setItem("userCode", userid);
    this.setState({ loading: true });
    const request = {
      code: userid,
      roleCode: "TCH1",
      stallCode: "STA7",
      ideaCode: "IDE21"
    };

    API.post(`login`, { request })
      .then(res => {
        sessionStorage.setItem("userName", res.data.result.Visitor.name);
        console.log('res',res);
        this.setState({
          userid: res.data.result.code
        })
        if (res.data.result.Visitor) {

          this.props.history.push({state: res.data.result.Visitor})
          // this.generateStartTelemetry(this.props.location.state);
          this.props.history
            .push({
              pathname: "/contentList",
              state: res.data.result.Visitor.coinsGiven
            })     
           }
          })
      .catch(e => {
        console.log("error");
        return;
      });
  }



	generateStartTelemetry(visitorInfo) {
		const edata = { type: "bazaar", mode: "play" };
		// const did = machineIdSync();
		const telemetry = {
				eid: "DC_START",
				did: '98912984-c4e9-5ceb-8000-03882a0485e4',
				ets: (new Date()).getTime(),
				dimensions: {
						'visitorId': visitorInfo.code,
						'visitorName': visitorInfo.name,
						'stallId': "STA7",
						'stallName': "Bazaar",
						'ideaId': "IDE21",
						'ideaName': "Crowd Sourcing",
						'edata': edata
				}
		}
		const event = telemetry;
		const request = {
				"events": [event]
		};

		console.log('telemetry request', request)

		axios.post(`http://52.172.188.118:3000/v1/telemetry`, request)
				.then(data => {
						console.log("telemetry registered successfully", data);
				}).catch(err => {
						console.log("telemetry registration error", err);
				})
}



  handleScan(data) {
    if (data) {
      this.setState({
        userid: data
      });
      this.handleChange({
        target: { name: "userid", value: this.state.userid }
      });
    } else {
    }
  }
  handleError(err) {}
  onSignIn(response) {
    sessionStorage.setItem("userid", response.profileObj.name);
    sessionStorage.setItem("userProfileImage", response.profileObj.imageUrl);
    this.setState({
      redirect: true
    });
  }
  onFailure(response) {
    this.setState({
      redirect: false
    });
  }
  render() {
    const previewStyle = {
      width: "100%",
      margin: "auto"
    };
    return (
      <Container fluid>
        <Segment style={{ minHeight: "100vh" }} padded="very">
          <Grid verticalAlign="middle">
            <Grid.Row columns={2}>
              <Grid.Column>
                <Image
                  src="./images/buzzinga.png"
                  size="large"
                  className="m-b"
                  centered
                />
              </Grid.Column>
              <Grid.Column>
                <Segment raised size="large" padded>
                  <Header as="h2" textAlign="center">
                    <Icon name="qrcode" /> Scan QR Code
                  </Header>
                  <QrReader
                    delay={this.state.delay}
                    style={previewStyle}
                    onError={this.handleError}
                    onScan={this.handleScan}
                  />
                  <Divider horizontal>Or</Divider>
                  <Header as="h3" textAlign="center">
                    Enter QR Code
                  </Header>
                  <Form
                    name="loginForm"
                    onSubmit={this.handleSubmit}
                    size="large"
                  >
                    <Form.Input
                      fluid
                      icon="user"
                      iconPosition="left"
                      placeholder="User Id"
                      name="userid"
                      defaultValue={this.state.userid}
                      onChange={this.handleChange}
                    />
                    <Button color="black" fluid size="large">
                      Login
                    </Button>
                  </Form>

                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        {/* {this.state.isRedirect=== true ?<Redirect to={{ pathname: "/ContentList", state: { username: this.state.username } }}/>:  */}
      </Container>
    );
  }
}
export default Login;
