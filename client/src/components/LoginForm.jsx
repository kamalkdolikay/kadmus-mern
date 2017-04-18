import React from 'react';
import createReactClass from 'create-react-class'; //deprecated: supported module

class NameForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        //alert(this.state.value);
        event.preventDefault();
        const name = this.state.value;
        const formData = `name=${name}`;

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
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default NameForm