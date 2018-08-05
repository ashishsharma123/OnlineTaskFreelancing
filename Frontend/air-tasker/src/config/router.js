import { Switch, Route } from 'react-router-dom';
import React, { Component } from "react";
import Login from '../screens/login/login';
import StaticScreen from '../screens/static-screens/static-screen';
import EmailVarificationScreen from '../screens/email-varification/email-varification';
import Home from '../screens/home/home';
import RegisterStep1 from '../screens/register-step-1/register-step-1';
import RegisterStep2 from '../screens/register-step-2/register-step-2';
import Home2 from '../screens/home2/home2';

const Router = () => (
    
        <Switch>
             <Route exact path='/' component={Home} />} 
            <Route path='/login' component={Login} />
            <Route path='/assembly' component={StaticScreen} />
            <Route path='/auto' component={StaticScreen} />
            <Route path='/accounting' component={StaticScreen} />
            <Route path='/admin' component={StaticScreen} />
            <Route path='/alteration' component={StaticScreen} />
            <Route path='/appliance' component={StaticScreen} />
            <Route path='/audio-visual' component={StaticScreen} />
            <Route path='/verify' component={EmailVarificationScreen} />  
            <Route path='/register-step-1' component={RegisterStep1} />
            <Route path='/register-step-2' component={RegisterStep2} />  
            <Route path='/home-2' component={Home2} />  
        </Switch>
)

export default Router;