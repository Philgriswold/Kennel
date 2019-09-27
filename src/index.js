import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from './components/Kennel'
import * as serviceWorker from './serviceWorker';




    ReactDOM.render(
    <Router>
    <Kennel />
   </Router>
    ,document.getElementById('root'))


serviceWorker.unregister();