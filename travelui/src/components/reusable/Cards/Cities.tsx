import React from 'react';

type Props = {
    url: string;
    cityName: string;
}

const CityCard: React.FC<Props>  = ({url, cityName}) => {
    return (
      <div className='city-card'>
          <img className='city-img' src={url} height="100%"  alt=''/>
          <h2 className="city-name"> {cityName} </h2>
      </div>
    );
};

export default CityCard;