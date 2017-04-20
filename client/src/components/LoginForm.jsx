import React from 'react';
import createReactClass from 'create-react-class'; //deprecated: supported module
import { Jumbotron, Button} from 'react-bootstrap';

class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
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
            if(xhr.status === 200){
                this.setState({
                    errors: {}
                })
                console.log("the form is valid");
            }
            else{
                const errors = xhr.response.errors ? xhr.response.errors : {}
                errors.summary = xhr.response.message;

                this.setState({
                    errors
                })
            }
        })
        xhr.send(formData)
    }

    render(){
        return(
            <div>
                <Jumbotron>
                    <center>
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" value={this.state.user.name} onChange={this.handleChange} placeholder="username" /><br />
                        <input type="password" name="password" value={this.state.user.password} onChange={this.handleChange} placeholder="password"/><br />
                        <Button bsStyle="primary" type="submit">Submit</Button>
                    </form>
                    <p></p>
                    </center>
                </Jumbotron>
            </div>
        )
    }
}

export default LoginForm