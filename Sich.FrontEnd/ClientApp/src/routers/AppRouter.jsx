import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
// import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from "./PublicRoute";
import { AppPublic } from "./AppPublic";
import PublicNavMenu from "../layouts/public/PublicNavMenu";

// npm install rimraf --save-dev

export const AppRouter = () => {
  const isAutenticated = false;

  return (
    <Router>
      <Switch>
        {isAutenticated ? null : <PublicNavMenu />}
        <PublicRoute
          exact
          path=""
          component={AppPublic}
          isAutenticated={isAutenticated}
        ></PublicRoute>

        {/* <PrivateRoute
            exact path="/login" 
            component={} 
            isAutenticated={true}
            ></PrivateRoute> */}
      </Switch>
    </Router>
  );
};
