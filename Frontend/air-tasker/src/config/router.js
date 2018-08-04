import { Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import Login from '../screens/login/login';
import StaticScreen from '../screens/static-screens/static-screen';
import EmailVarificationScreen from '../screens/email-varification/email-varification';
import Home from '../screens/home/home';
import RegisterStep1 from '../screens/register-step-1/register-step-1';
import RegisterStep2 from '../screens/register-step-2/register-step-2';

const Router = () => (
    
        <Switch>
             <Route exact path='/' component={Home} />} 
            <Route path='/login' component={Login} />
            <Route path='/alterations' component={StaticScreen} />
            <Route path='/auto' component={StaticScreen} />
            <Route path='/verify' component={EmailVarificationScreen} />  
            <Route path='/register-step-1' component={RegisterStep1} />
            <Route path='/register-step-2' component={RegisterStep2} />  
        </Switch>
)

export default Router;