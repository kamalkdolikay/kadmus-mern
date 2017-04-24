import React from 'react';
import createReactClass from 'create-react-class'; //deprecated: supported module
import { Jumbotron, Button, Form, FormGroup, Col, ControlLabel, FormControl, Checkbox } from 'react-bootstrap';

const LoginForm = ({
    onSubmit,
    onChange,
    user,
    errors
}) => (
    <Form horizontal onSubmit={onSubmit}>
        <FormGroup>
            <Col componentClass={ControlLabel} sm={6}>
                <h1>Login</h1>
            </Col>
        </FormGroup>

        <FormGroup controlId="">
        <Col componentClass={ControlLabel} sm={5}>
            Username
        </Col>
        <Col sm={2}>
            <FormControl type="name" placeholder="Name" name="name" value={user.name} onChange={onChange} />
        </Col>
        </FormGroup>

        <FormGroup controlId="">
        <Col componentClass={ControlLabel} sm={5}>
            Password
        </Col>
        <Col sm={2}>
            <FormControl type="password" placeholder="Password" name="password" value={user.password} onChange={onChange} />
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
            {errors}
        </Col>
        </FormGroup>
    </Form>
)
 
export default LoginForm