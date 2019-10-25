import React from 'react';
import { Header, Footer } from '../../common/components/';
import Routes from '../Routes/Routes';
import './PageLayout.scss';

const PageLayout = () => {
    return (
        <div className="page-layout">
            <Header />
            <Routes />
            <Footer />
        </div>
    );
}

export default PageLayout;