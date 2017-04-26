import React, { Component } from 'react';
import { Jumbotron, Button, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';

class Loginscreen2 extends Component{
    constructor(props){
        super(props);
        var loginButtons=[];
        loginButtons.push(
            <div>
                <Button type="submit" onClick={(event) => this.handleClick(event,'student')}>
                    Register as Student
                </Button>
                <br />
                <Button type="submit" onClick={(event) => this.handleClick(event,'teacher')}>
                    Register as Teacher
                </Button>
            </div>
        )
        this.state={
            loginButtons:loginButtons,
            isLogin:true
        }
    }
    componentWillMount(){
    var loginmessage = "Register Now";
    this.setState({
                  loginmessage:loginmessage
                    })
  }
  handleClick(event,userRole){
    console.log("event",userRole);
    var loginmessage;
    if(this.state.isLogin){
        loginmessage = "Already registered.Go to Login";
        var loginButtons=[];
        loginButtons.push(
            <Button type="submit" onClick={(event) => this.handleClick(event,userRole)}>
                Login
            </Button>
        )
        this.setState({
                     loginmessage:loginmessage,
                     loginButtons:loginButtons,
                     isLogin:false
                   })
    }
    else{
        var loginButtons=[];
        loginButtons.push(
            <div>
                <Button type="submit" onClick={(event) => this.handleClick(event,'student')}>
                    Register as Student
                </Button>
                <br />
                <Button type="submit" onClick={(event) => this.handleClick(event,'teacher')}>
                    Register as Teacher
                </Button>
            </div>
        )

        loginmessage = "Not Registered yet.Go to registration";
        this.setState({
                        loginmessage:loginmessage,
                        loginButtons:loginButtons,
                        isLogin:true
                    })
    }
  }
  render(){
      return (
      <div>
        <div>
          {this.state.loginmessage}
          {this.state.loginButtons}
        </div>
      </div>
    );
  }
}

export default Loginscreen2;