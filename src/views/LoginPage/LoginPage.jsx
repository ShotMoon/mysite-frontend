import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
//mobx
import { inject, observer } from 'mobx-react';

import loginStyle from "assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx";

@inject(stores=>{
  return {appState: stores.appState}
})
@observer
class LoginPage extends React.Component {

  constructor(){
    super()
    this.state = {
      username:'',
      password:''
    }
    
  }

  handleLogin(){
    this.setState({ 
      helpText: null 
    })

    this.props.appState.login(this.state.username, this.state.password).then(()=>{
      this.props.history.go(-1)
    }).catch(msg=>{
      this.setState({helpText:msg})
    })
  }

  handleInput(k, e){
    this.setState({
      [k]: e.target.value
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              <Card>
                <form className={classes.form}>
                  <CardHeader color="primary" className={classes.cardHeader}>
                    <h4>Login</h4>
                    <div className={classes.socialLine}>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i
                          className={classes.socialIcons + " fab fa-twitter"}
                        />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i
                          className={classes.socialIcons + " fab fa-facebook"}
                        />
                      </Button>
                      <Button
                        justIcon
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i
                          className={
                            classes.socialIcons + " fab fa-google-plus-g"
                          }
                        />
                      </Button>
                    </div>
                  </CardHeader>
                  {this.state.helpText ? <p className={classes.divider}>{this.state.helpText}</p> : <p className={classes.divider}>Or Be Classical</p>}
                  <CardBody>
                    <CustomInput
                      labelText="User Name..."
                      id="username"
                      formControlProps={{
                        fullWidth: true
                      }}
                      
                      inputProps={{
                        type: "text",
                        onChange: (e)=>this.handleInput('username', e),
                        endAdornment: (
                          <InputAdornment position="end">
                            <People className={classes.inputIconsColor} />
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Password"
                      id="pass"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "password",
                        onChange: (e)=>this.handleInput('password', e),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Icon className={classes.inputIconsColor}>
                              lock_outline
                            </Icon>
                          </InputAdornment>
                        )
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                    <Button simple color="primary" size="lg" onClick={()=>this.handleLogin()}>
                      Get started
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(loginStyle)(LoginPage);
