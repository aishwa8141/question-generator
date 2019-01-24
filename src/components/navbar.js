import React from "react";
import { Image, Menu, Dropdown, Icon, Label, Header } from "semantic-ui-react";
import { Redirect, Link } from "react-router-dom";
import "../css/router.css";
// import API from '../utils/Api'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signOut: false
    };
  }
  handleSignOut = () => {
    sessionStorage.clear();
    this.setState({
      signOut: true
    });
  };

  updateCredits = (userId, value) => {
    //axios call for credits api to update
  };

  render() {
    const trigger = (
      <span>
        <Image
          avatar
          src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          size="mini"
        />
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
                src="https://clipart.info/images/ccovers/1495750444Gold-Coins-PNG-Clipart.png"
                verticalAlign="middle"
              />
              <span style={{ marginLeft: "6px" }}>
                <b>{this.props.credits}</b>
              </span>
            </Menu.Item>

            <Menu.Item position="right">
              <Dropdown trigger={trigger} pointing="top right" icon={null}>
                <Dropdown.Menu>
                  <Dropdown.Header>
                    {sessionStorage.getItem("userName")}
                  </Dropdown.Header>
                  <Dropdown.Item onClick={this.gotoContentList}>
                    <Icon name="clipboard outline" />{" "}
                    <a href="/contentList" id="atag">
                      {" "}
                      Content List
                    </a>
                  </Dropdown.Item>
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
