import React from 'react';
import Kenya from '../Country/Kenya/Kenya';
import Uganda from '../Country/Uganda/Uganda';
import Tanzania from '../Country/Tanzania/Tanzania';
import './GetQuotes.scss';

const GetQuotes = () => {
  const renderQuotes = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const country = urlParams.get('country');

    if (country) {
      switch (country) {
        case 'kenya':
          return <Kenya />;
        case 'uganda':
          return <Uganda />;
        case 'tanzania':
          return <Tanzania />;
        default:
          return '';
      }
    }

    return '';
  }
  return (
    <div className="get-quotes_container">
      {
        renderQuotes()
      }
    </div>
  );
}

export default GetQuotes;