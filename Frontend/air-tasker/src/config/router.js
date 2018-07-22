import { Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import Login from '../screens/login/login';
import StaticScreen from '../screens/static-screens/static-screen';
import EmailVarificationScreen from '../screens/email-varification/email-varification';

const Router = () => (
    
        <Switch>
            {/* <Route exact path='/' component={Login} />} */}
            <Route path='/login' component={Login} />
            <Route path='/alterations' component={StaticScreen} />
            <Route path='/auto' component={StaticScreen} />
            <Route path='/email-varification' component={EmailVarificationScreen} />  */}
        </Switch>
)

export default Router;