import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import MyHeader from 'components/Header/MyHeader';
import MyNavPills from 'components/NavPills/MyNavPills';

import componentsStyle from "assets/jss/material-kit-react/views/components";
import Routes from '../config/router';

class App extends React.Component {

    asyncBootstrap() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(true)
            })
        })
    }
    render() {
        const { classes, ...rest } = this.props;
        return (
          <div>
            <MyHeader />
            <div className={classNames(classes.main, classes.mainRaised)}>
                <Routes key="routes" />
            </div>
          </div>
        );
      }
}

export default withStyles(componentsStyle)(App);
