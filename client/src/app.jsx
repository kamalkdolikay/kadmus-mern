import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes.js';

console.clear()
injectTapEventPlugin();

const App = () => (
    <div>
        {routes.map((route,index) => (
        <Route key={index} {...route}/>
        ))}
    </div>
)

ReactDom.render((
    <Router>
        <Switch>
            <App />
        </Switch>
    </Router>
    ),
    document.getElementById('react-app')
);