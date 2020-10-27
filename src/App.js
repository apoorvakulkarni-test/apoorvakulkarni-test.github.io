import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer';
import uuid from 'uuid'
import { routingItems } from './config'
import './App.css'
import ReactGA from "react-ga";


class App extends React.Component {
    componentDidMount() {
        ReactGA.initialize('UA-178887327-1');
        ReactGA.pageview(window.location.pathname);
    }
    
    render() {
        return (
            <React.Fragment>
            <Header />
            <Switch>
                {routingItems.map(item => <Route exact key={uuid()} path={item.path} component={item.component} />)}
            </Switch>
            <Footer />
            </React.Fragment>
        );
    }
}


export default App;
