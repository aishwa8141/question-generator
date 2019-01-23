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
class Login extends React.Component {
  constructor(props) {
    super(props);
    // userService.logout();
    this.state = {
      submitted: false,
      loading: false,
      error: "",
      delay: 1000,
      userid: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleScan = this.handleScan.bind(this);
  }
  handleChange(e) {
    console.log(e);
    console.log(e.target);
    this.setState({ userid : e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { userid } = this.state;
    if (!userid) {
      return;
    }
    const request = {
      code: this.state.userid,
      roleCode: "TCH1",
      stallCode: "STA6",
      ideaCode: "IDE6"
    };
    this.setState({ submitted: true });
    axios
      .post(`https://dev.ekstep.in/api/devcon/v3/login`, { request })
      .then(res => console.log("respomn", res))
      .catch(e => console.log("error"));
      this.props.history.push({
        pathname:'/contentList',
        state:{}
      })
    this.setState({ loading: true });
    console.log(this.state.userid);
  }
  handleScan(data) {
    if (data) {
      this.setState({
        userid: data
      });
      this.handleChange({
        target: { name: "userid", value: this.state.userid }
      });
      console.log(data);
    } else {
      console.log(data);
    }
  }
  handleError(err) {
    console.error(err);
  }
  onSignIn(response) {
    console.log(response);
    sessionStorage.setItem("userid", response.profileObj.name);
    sessionStorage.setItem("userProfileImage", response.profileObj.imageUrl);
    this.setState({
      redirect: true
    });
  }
  onFailure(response) {
    console.log("Login Failed");
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
      </Container>
    );
  }
}
export default Login;

