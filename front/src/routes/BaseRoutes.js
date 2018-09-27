import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NoMatch from './NoMatch'

export default class extends Component {
    getChildRoutes() {
    }
    render() {
        const childRoutes = this.getChildRoutes()
        return (
            <div>
                <Switch>
                    {childRoutes.map((route, k) => <Route key={k} path={route.path} component={route.component} />)}
                    <Route component={NoMatch} />
                </Switch>
            </div>
        )
    }
}
