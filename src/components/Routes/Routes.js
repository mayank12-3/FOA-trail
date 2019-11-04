import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from '../Home/Home';
import ContactUs from '../ContactUs/ContactUs';
import GetQuotes from '../GetQuotes/GetQuotes';
import AboutUs from '../AboutUs/AboutUs';
import Privacy from '../Privacy/Privacy';
import Terms from '../Terms/Terms';
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
                    path="/contact-us"
                    exact
                    component={ContactUs}
                />
                <Route
                    path="/tour"
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
                    path="/terms-and-conditions"
                    exact
                    component={Terms}
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