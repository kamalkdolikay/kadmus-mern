import React from 'react'
import { Jumbotron ,Button, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';

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
    <Form horizontal>
        <FormGroup>
            <Col componentClass={ControlLabel} smOffset={1} sm={5}>
                <h1>Signup</h1>
            </Col>
        </FormGroup>

        <FormGroup controlId="">
        <Col componentClass={ControlLabel} sm={5}>
            Username
        </Col>
        <Col sm={2}>
            <FormControl type="name" placeholder="Name" name="name" value="" />
        </Col>
        </FormGroup>

        <FormGroup controlId="">
        <Col componentClass={ControlLabel} sm={5}>
            Password
        </Col>
        <Col sm={2}>
            <FormControl type="password" placeholder="Password" name="password" value="" />
        </Col>
        </FormGroup>

        <FormGroup>
        <Col smOffset={5} sm={2}>
            <Button type="submit">
            Sign in
            </Button>
        </Col>
        </FormGroup>

        <FormGroup>
        <Col smOffset={5} sm={2}>
            
        </Col>
        </FormGroup>
    </Form> 
        )
    }
}

export default SignUpForm
