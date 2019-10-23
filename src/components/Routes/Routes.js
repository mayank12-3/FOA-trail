import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../Home/Home';
import ContactUs from '../ContactUs/ContactUs';
import GetQuotes from '../GetQuotes/GetQuotes';

const Routes = () => {
    return(
        <main>
            <Switch>
                <Route
                    path="/"
                    exact
                    component={Home}
                />
                <Route
                    path="/contact"
                    exact
                    component={ContactUs}
                />
                <Route
                    path="/get-quotes"
                    exact
                    component={GetQuotes}
                />
            </Switch>
        </main>
    );
}

export default Routes;