import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom';
import CustomerSelector from './pages/CustomerSelector';
import {ForgotPassword, SignIn, SignUp} from './pages/Authorization';

export const useRoutes = (isAuthenticated: boolean) => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/customerSelector" exact>
                    <CustomerSelector />
                </Route>
                <Redirect to="/customerSelector" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/signIn" exact>
                <SignIn />
            </Route>
            <Route path="/signUp" exact>
                <SignUp />
            </Route>
            <Route path="/forgotPassword" exact>
                <ForgotPassword />
            </Route>
            <Redirect to="/signIn" />
        </Switch>
    )
};