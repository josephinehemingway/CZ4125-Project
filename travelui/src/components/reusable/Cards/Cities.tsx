import React from 'react';
import './Cards.css';

type Props = {
    url: string;
    cityName: string;
    onClick?: React.MouseEventHandler
}

const CityCard: React.FC<Props>  = ({url, cityName, onClick}) => {
    return (
      <div className='city-card' onClick={onClick}>
          <img className='city-img' src={url} height="100%"  alt=''/>
          <h2 className="city-name"> {cityName} </h2>
      </div>
    );
};

export default CityCard;