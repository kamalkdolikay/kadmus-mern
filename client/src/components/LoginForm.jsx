import React from 'react';
import createReactClass from 'create-react-class'; //deprecated: supported module
import { Jumbotron, Button } from 'react-bootstrap';

const LoginForm = ({
    onSubmit,
    onChange,
    user,
    errors
}) => (
    <div>
        <Jumbotron>
            <center>
            <h1>Login</h1>
            {errors}
            <form onSubmit={onSubmit}>
                <input type="text" name="name" value={user.name} onChange={onChange} placeholder="username" /><br />
                <input type="password" name="password" value={user.password} onChange={onChange} placeholder="password"/><br />
                <Button bsStyle="primary" type="submit">Submit</Button>
            </form>
            <p></p>
            </center>
        </Jumbotron>
    </div>
)
 
export default LoginForm