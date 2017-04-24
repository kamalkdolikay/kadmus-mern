import React from "react";
import {MuiThemeProvider, AppBar, RaisedButton, TextField} from 'material-ui';

class LoginForm2 extends React.Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:''
        }
    }

    render() {
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar title="Login" />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event,newValue)=>this.setState({username:newValue})}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event,newValue)=>this.setState({password:newValue})}
                        />
                        <br />
                        <RaisedButton
                            label="Submit"
                            primary={true}
                            style={style}
                            onClick={(event=>this.handleClick(event))}
                            />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

const style = {
    margin: 15,
};

export default LoginForm2
//http://technoetics.in/handling-user-login-registration-using-nodejs-mysql/
