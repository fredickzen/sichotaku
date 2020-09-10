import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
  } from "react-router-dom";
// import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { AppPublic } from './AppPublic';
import NavMenu from '../layouts/partial/NavMenu';

// npm install rimraf --save-dev

export const AppRouter = () => {
    return (
        <Router>
        <div>
        <NavMenu></NavMenu>
        
          <Switch>
            <PublicRoute
             exact path="" 
             component={AppPublic} 
             isAutenticated={false}
            ></PublicRoute>

            {/* <PrivateRoute
            exact path="/login" 
            component={} 
            isAutenticated={true}
            ></PrivateRoute> */}
          </Switch>
        </div>
      </Router>
    )
}