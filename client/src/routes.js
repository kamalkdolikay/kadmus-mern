import React from 'react';
import { Route, Link, Redirect, withRouter, Switch } from 'react-router-dom';
import createReactClass from 'create-react-class'; //deprecated: supported module
import About from './about.jsx';
import Base from './components/Base.jsx';
import LoginPage from './containers/LoginPage.jsx';
import DashboardPage from './containers/DashboardPage.jsx';
import Auth from './modules/Auth.js';
import SignUpForm from './components/SignUpForm.jsx';

const Repos = () => (
  <div>
    <h2>hello repos</h2>
    <Link to="/repos/facebook">React</Link><br/>
    <Link to="/topics">Topics</Link><br />
    <Link to="/netflix">Netflix</Link><br />
    <Link to="/protected">Protected Page</Link>
    <AuthButton/>
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

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const Protected = () => <h3>Protected</h3>

class Login extends React.Component {
  state = {
    redirectTo: false
  }

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectTo: true })
    })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectTo } = this.state
    console.log(redirectTo)
    console.log("from",from)
    console.log("this.props",this.props)
    console.log("this.props.location",this.props.location)
    console.log("this.props.location.state",this.props.location.state)
    console.log(this.login)

    if (redirectTo) {
      return (
        <Redirect to={from.pathname}/>
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

/*module.exports = (
    <div>
        <Route path="/" component={Repos} />
        <Route path="/repos/:name" component={Repo} />
        <Route path="/topics" component={Topics}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path="/protected" component={Protected}/>
    </div>
)*/

const routes = [
  {
    path: '/',
    component: () => {
        if (Auth.isUserAuthenticated()) {
          callback(null, Base);
        } else {
          callback(null, Base);
        }
      }
  },
  {
    path: '/repos/:name',
    component: Repo
  },
  {
    path: '/topics',
    component: Topics
  },
  {
    path: '/protected',
    component: Protected
  },
  {
    path: '/login',
    component: LoginPage
  },
  {
    path:'/signup',
    component: SignUpForm
  }
]

module.exports = routes