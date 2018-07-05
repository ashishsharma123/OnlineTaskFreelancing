import { Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import Login from '../screens/login/login';

const Router = () => (
    
        <Switch>
            {/* <Route exact path='/' component={Login} /> */}
            <Route path='login' component={Login} />
            {/* <Route path='/schedule' component={Schedule} />  */}
        </Switch>
)

export default Router;