import React from 'react';
import './MarkerStyle.css';

const Marker = (color) => {

    return (
      <div className="marker"
        style={{ backgroundColor: color, cursor: 'pointer'}}

      />
    );
  };

  export default Marker;