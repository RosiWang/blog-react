import React, { Component } from 'react';
import { BrowserRouter as MainRouter, Route, Switch } from 'react-router-dom';
import { BlogRoutes, NoMatch } from './routes/'
// import styles from './style/index.css'
// import jquery from './style/jquery/js/jquery-1.11.0.min'
// import signature from './style/jquery/js/jq-signature'

class App extends Component {
    render() {
        return (
            <div>
                <MainRouter>
                    <div id="wrap">
                        <Switch>
                            <Route path="/" component={BlogRoutes} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </MainRouter>
            </div>
        );
    }
}

export default App;
