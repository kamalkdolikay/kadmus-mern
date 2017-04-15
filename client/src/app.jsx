import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link, browserHistory } from 'react-router-dom';
import createReactClass from 'create-react-class'; //deprecated: supported module
import About from './about.jsx';
const Repos = () => (
  <div>
    <h2>hello repos</h2>
    <Link to="/repos/facebook">React</Link><br/>
    <Link to="/topics">Topics</Link><br />
    <Link to="/netflix">Netflix</Link>

    <Route path="/:id" component={Child}/>
    
  </div>
)

const Repo = createReactClass({
    render(){
        return(
            <div>
                <h2>hello repo</h2>
                {this.props.params}
                {this.props.children}
            </div>
        )
    }
})

const Topics = ({ match }) => (
    <div>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        <Route path={`${match.url}/:id`} component={Topic} />
        <Route exact path={match.url} render={() => (
            <h3>please select a topic</h3>
        )} />
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.parmas.id}</h3>
    </div>
)

const Child = ({ match }) => (
  <div>
    <h3>ID: {match.params.id}</h3>
  </div>
)

ReactDom.render((
    <Router history="browserHistory">
        <div>
            <Route path="/" component={Repos} />
            <Route path="/repos/:name" component={Repo} />
            <Route path="/topics" component={Topics}/>
        </div>
    </Router>
    ),
    document.getElementById('react-app')
);