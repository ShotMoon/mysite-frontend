import React from 'react';

import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import People from "@material-ui/icons/People";

import CustomInput from 'components/CustomInput/CustomInput';
import Button from "components/CustomButtons/Button";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Card from "components/Card/Card";
import CardHeader from "components/Card/CardHeader";
import CardBody from "components/Card/CardBody";
import CardFooter from "components/Card/CardFooter";

//mobx
import { inject, observer } from 'mobx-react';

import loginStyle from "assets/jss/material-kit-react/views/componentsSections/loginStyle";

@inject(stores=>{
  return {appState: stores.appState}
})
@observer
class Register extends React.Component{

    constructor(){
      super()
      this.state = {
        username:'',
        password:'',
        passwordRe:''
      }
    }

    handleInput(k, e) {
      this.setState({
        [k]: e.target.value
      })
    }

    clearErrorMsg() {
      this.setState({helpText: ''})
    }

    handleRegister() {
      this.clearErrorMsg()
      if(this.state.username === '') {
        this.setState({helpText: '用户名不能为空'})
        return
      }
      if(this.state.password === '') {
        this.setState({helpText: '密码不能为空'})
        return
      }
      if(this.state.password !== this.state.passwordRe) {
        this.setState({helpText: ' 两次输入密码不同'})
        return
      }

      this.props.appState.register(this.state.username, this.state.password).then(()=>{
        this.props.history.go(-2)
      }).catch(msg=>{
        this.setState({helpText:msg})
      })
    }


    render() {
        const { classes } = this.props;
        return (
            <div>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={4}>
                    <Card>
                      <form className={classes.form}>
                        <CardHeader color="primary" className={classes.cardHeader}>
                          <h4>Register</h4>
                        </CardHeader>
                        {this.state.helpText ? <p className={classes.divider}>{this.state.helpText}</p> : <p className={classes.divider}>welcome</p>}
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
                          <CustomInput
                            labelText="comfirm password"
                            id="repass"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "password",
                              onChange: (e)=>this.handleInput('passwordRe', e),
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
                          <Button simple color="primary" size="lg" onClick={()=>this.handleRegister()}>
                            register
                          </Button>
                        </CardFooter>
                      </form>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
        )
    }
}

export default withStyles(loginStyle)(Register) 