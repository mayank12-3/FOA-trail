import React from 'react';
import size from 'lodash/size';
import Kenya from '../Country/Kenya/Kenya';
import Uganda from '../Country/Uganda/Uganda';
import Tanzania from '../Country/Tanzania/Tanzania';
import './GetQuotes.scss';

const GetQuotes = () => {
    const renderQuotes = () => {
        const country = window.location.search.split('?C=');
        if(size(country) > 1) {
            switch(country[1]) {
                case 'Kenya':
                    return <Kenya />;
                case 'Uganda':
                    return <Uganda />;
                case 'Tanzania':
                    return <Tanzania />;
                default:
                    return '';
            }
        }
        return '';
    }
    return(
        <div className="get-quotes_container">
            {
                renderQuotes()
            }
        </div>
    );
}

export default GetQuotes;