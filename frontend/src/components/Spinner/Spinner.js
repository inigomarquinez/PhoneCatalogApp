/**
 * @file Spinner component to show while waiting for the data to be fetched from the back-end.
 */

import React from 'react';

const Spinner = () => (
  <div>
    <div>LOADING. PLEASE, WAIT.</div>
    <div>
      <i className="fas fa-spinner fa-pulse fa-10x" />
    </div>
  </div>
);

export default Spinner;
