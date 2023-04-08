import React from 'react';
import './loader.css';

export function Loader() {
  return (
    <div className="loader-container" data-testid="loader">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
