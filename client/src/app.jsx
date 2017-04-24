import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes.js';

console.clear()

const App = () => (
    <div>
        {routes.map((route,index) => (
        <Route key={index} {...route}/>
        ))}
    </div>
)

ReactDom.render((
    <Router>
        <App />
    </Router>
    ),
    document.getElementById('react-app')
);