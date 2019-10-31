import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from '../Home/Home';
import ContactUs from '../ContactUs/ContactUs';
import GetQuotes from '../GetQuotes/GetQuotes';
import AboutUs from '../AboutUs/AboutUs';
import Privacy from '../Privacy/Privacy';
import PageNotFound from '../PageNotFound/PageNotFound.js'
import PackageDetails from '../PackageDetails/PackageDetails';

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
                <Route
                    path="/details"
                    exact
                    component={PackageDetails}
                />
                <Route
                    path="/about-us"
                    exact
                    component={AboutUs}
                />
                <Route
                    path="/privacy-policy"
                    exact
                    component={Privacy}
                />
                <Route
                    path="/pagenotfound"
                    exact
                    component={PageNotFound}
                />
                <Redirect path="*" to="/pagenotfound" />
            </Switch>
        </main>
    );
}

export default Routes;