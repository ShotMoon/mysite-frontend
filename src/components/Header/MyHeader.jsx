import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components

import Header from "components/Header/Header";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import image from "assets/img/bg.jpg";
import profileImage from "assets/img/faces/avatar.jpg";
import navbarsStyle from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle";

//mobx
import { inject, observer } from 'mobx-react';

@inject(stores => {
  return { appState: stores.appState }
})
@observer
class SectionNavbars extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <Header
              brand="shotmoon"
              rightLinks={
                <List className={classes.list}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="/login"
                      className={classes.navLink}
                      // onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Login
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      {this.props.appState.getUserInfo()}
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      justIcon
                      round
                      href="#pablo"
                      className={classes.notificationNavLink}
                      onClick={e => e.preventDefault()}
                      color="rose"
                    >
                      <Email className={classes.icons} />
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <CustomDropdown
                      left
                      caret={false}
                      hoverColor="black"
                      dropdownHeader="Dropdown Header"
                      buttonText={
                        <img
                          src={profileImage}
                          className={classes.img}
                          alt="profile"
                        />
                      }
                      buttonProps={{
                        className:
                          classes.navLink + " " + classes.imageDropdownButton,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Me",
                        "Settings and other stuff",
                        "Sign out"
                      ]}
                    />
                  </ListItem>
                </List>
              }
            />
    ) ;
  }
}

export default withStyles(navbarsStyle)(SectionNavbars);
