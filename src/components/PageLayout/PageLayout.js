import React from 'react';
import { Header, Footer } from '../../common/components/';
import Routes from '../Routes/Routes';
import './PageLayout.scss';

const PageLayout = (props) => {
    return (
        <div className="page-layout">
            <Header {...props} />
            <Routes />
            <Footer />
        </div>
    );
}

export default PageLayout;
