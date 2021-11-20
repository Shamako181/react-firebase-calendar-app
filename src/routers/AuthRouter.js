import React from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import {LoginScreen} from '../components/auth/LoginScreen.js'
import {RegisterScreen} from '../components/auth/RegisterScreen.js'  

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route exact path="/auth/login" component={LoginScreen}/>
                    <Route exact path="/auth/register" component={RegisterScreen}/>
                    <Redirect to="/auth/login"/>
                </Switch>  
            </div>      
        </div>
    )
}
