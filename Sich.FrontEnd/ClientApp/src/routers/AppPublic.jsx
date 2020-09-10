import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../components/pages/Home/Home';
import { Users } from '../components/pages/Users/Users';


export const AppPublic = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
            <Switch>
                <Route exact path="/home" component={Home}></Route>
                <Route exact path="/users" component={Users}></Route>
                
                <Redirect to="/home"></Redirect>
            </Switch>
            </div>
        </div>
    )
}
