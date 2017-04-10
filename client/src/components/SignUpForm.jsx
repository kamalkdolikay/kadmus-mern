import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {Card,CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const SignUpForm = ({
    onSubmit,
    onchange,
    errors,
    user,
}) => (
    <Card classname="container">
        <form action="/" onSubmit={onSubmit}>
            <h2 className="card-heading">Sign Up</h2>
            {errors.summaray}
        </form>
    </Card>
)