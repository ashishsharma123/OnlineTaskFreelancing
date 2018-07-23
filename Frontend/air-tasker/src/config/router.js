import { Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import Login from '../screens/login/login';
import StaticScreen from '../screens/static-screens/static-screen';
import EmailVarificationScreen from '../screens/email-varification/email-varification';
import Home from '../screens/home/home';

const Router = () => (
    
        <Switch>
             <Route exact path='/' component={Home} />} 
            <Route path='/login' component={Login} />
            <Route path='/alterations' component={StaticScreen} />
            <Route path='/auto' component={StaticScreen} />
            <Route path='/verify' component={EmailVarificationScreen} />  */}
        </Switch>
)

export default Router;