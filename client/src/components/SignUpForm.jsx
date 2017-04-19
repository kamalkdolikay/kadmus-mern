import React from 'react'
import { Jumbotron ,Button } from 'react-bootstrap';

class SignUpForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        event.preventDefault()
        const name = this.state.value
        const formData = `name=${name}`

        const xhr = new XMLHttpRequest()
        xhr.open('post','/signup')
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
        xhr.responseType = 'json'
        xhr.addEventListener('load', () => {
            console.log("xhr",xhr)
            if(xhr.status === 200){
                this.setState({
                    error: {}
                })
                console.log("the form is valid")
            }
            else{
                console.log("err", xhr)
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
                    <h1>Signup</h1>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="username" /><br />
                        <input type="password" placeholder="password" /><br />
                        <Button bsStyle="primary" type="submit">Submit</Button>
                    </form>
                    <p></p>
                    </center>
                </Jumbotron>
            </div>   
        )
    }
}

export default SignUpForm
