import React from 'react';
<<<<<<< HEAD
import size from 'lodash/size';
=======
// import size from 'lodash/size';
>>>>>>> 9d5a7f8f3e9e7b31ed05e177343c68d0447fd69a
import Kenya from '../Country/Kenya/Kenya';
import Uganda from '../Country/Uganda/Uganda';
import Tanzania from '../Country/Tanzania/Tanzania';
import './GetQuotes.scss';

const GetQuotes = () => {
    const renderQuotes = () => {
<<<<<<< HEAD
        const country = window.location.search.split('?C=');
        if(size(country) > 1) {
            switch(country[1]) {
                case 'Kenya':
                    return <Kenya />;
                case 'Uganda':
                    return <Uganda />;
                case 'Tanzania':
=======
        debugger
        const urlParams = new URLSearchParams(window.location.search);
        const country = urlParams.get('country');
        if(country) {
            switch(country) {
                case 'kenya':
                    return <Kenya />;
                case 'uganda':
                    return <Uganda />;
                case 'tanzania':
>>>>>>> 9d5a7f8f3e9e7b31ed05e177343c68d0447fd69a
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