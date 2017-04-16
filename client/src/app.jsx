import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import routes from './routes.js';

ReactDom.render((
    <Router>
        {routes}
    </Router>
    ),
    document.getElementById('react-app')
);