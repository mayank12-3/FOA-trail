import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../Home/Home';

const Routes = () => {
    return(
        <main>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={Home}
                />
            </Switch>
        </main>
    );
}

export default Routes;