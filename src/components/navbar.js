import React from "react";
import { Image, Menu, Dropdown, Icon } from "semantic-ui-react";
import { Redirect } from "react-router";
import axios from "axios";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results:'',
      credits: 0,
      signOut: false
    };
  }
  handleSignOut = () => {
    console.log("User Signed Out");
    sessionStorage.clear();
    this.setState({
      signOut: true
    });
  };
componentDidMount(){
  axios
  .get(`http://localhost:3002/data`)
  .then(res => {
    console.log("searcgj", res);
    this.setState({
     credits: res.data.users[0].credits
    });
  })
  .catch(err => {
    console.log("Error retreiving Info");
  });
}
  render() {
    const trigger = (
      <span>
        <Image avatar src={sessionStorage.getItem("userProfileImage")} />
      </span>
    );

    return (
      <div>
        {this.state.signOut ? (
          <Redirect to="/" />
        ) : (
          <Menu inverted>
            <Menu.Item>
              <Image
                size="mini"
                src="https://cdn2.iconfinder.com/data/icons/world-currencies-gold/512/indian_rupee_sign_currency_gold_symbol-512.png"
                verticalAlign="middle"
              />
              <span>{this.props.credits == null ? this.state.credits : this.props.credits}</span>
            </Menu.Item>
            <Menu.Item position="right">
              <Dropdown trigger={trigger} pointing="top right" icon={null}>
                <Dropdown.Menu>
                  <Dropdown.Header>
                    {sessionStorage.getItem("userName")}
                  </Dropdown.Header>
                  <Dropdown.Item onClick={this.handleSignOut}>
                    <Icon name="sign out" />
                    Sign Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Menu.Item>
          </Menu>
        )}
      </div>
    );
  }
}

export default Navbar;
