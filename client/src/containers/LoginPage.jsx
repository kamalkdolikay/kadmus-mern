import React from 'react';
import createReactClass from 'create-react-class'; //deprecated: supported module
import { Jumbotron, Button } from 'react-bootstrap';
import LoginForm from '../components/LoginForm.jsx';
import Auth from '../modules/Auth.js';

class LoginPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            errors: '',
            user:{
                name: '',
                password: ''
            }
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({
        user
        });
    }

    handleSubmit(event){
        //alert(this.state.value);
        event.preventDefault();
        const user = encodeURIComponent(this.state.user.name);
        const password = encodeURIComponent(this.state.user.password);
        const formData = `user=${user}&password=${password}`;

        const xhr = new XMLHttpRequest()
        xhr.open('post', '/login')
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.responseType = 'json'
        xhr.addEventListener('load', () => {
            console.log("xhr", xhr.response.token)
            if(xhr.status === 200){
                this.setState({
                    errors: 'logged in'
                })

                Auth.saveToken(xhr.response.token)
                //console.log(Auth.getToken())
                //console.log(Auth.currentUser())

                console.log("the form is valid");
            }
            else{
                //console.log("xhr2", xhr.response.message)
                if(xhr.response.message == 'Incorrect username'){
                    this.setState({ errors: xhr.response.message })
                }
                if(xhr.response.message == 'Incorrect password'){
                    this.setState({ errors: xhr.response.message })
                }
                if(xhr.response.errors.password == 'Please provide your password'){
                    this.setState({ errors : xhr.response.errors.password })
                }
                if(xhr.response.errors.user == 'Please provide your name'){
                    this.setState({ errors : xhr.response.errors.user })
                }
            }
        })
        xhr.send(formData)
    }

    render(){
        return(
            <LoginForm
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                user={this.state.user}
                errors={this.state.errors}
            />
        )
    }
}

export default LoginPage