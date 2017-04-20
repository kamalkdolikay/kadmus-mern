import React from 'react';
import createReactClass from 'create-react-class'; //deprecated: supported module
import { Jumbotron, Button } from 'react-bootstrap';
import LoginForm from '../components/LoginForm.jsx';

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
            console.log("xhr", xhr)
            if(xhr.status === 200){
                this.setState({
                    errors: ''
                })
                console.log("the form is valid");
            }
            else{
                console.log("xhr2", xhr.response.message)
                //const errors = xhr.response.errors ? xhr.response.errors : {}
                

                this.setState({
                    errors : xhr.response.message
                })
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