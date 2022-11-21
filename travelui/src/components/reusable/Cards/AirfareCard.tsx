import React from 'react';
import './Cards.css';

type Props = {
    imgurl: string;
    city: string;
    country: string;
    price: number;
    flightClass: string;
    currency: string;
}

const AirfareTicketCard: React.FC<Props> = ({imgurl, city, country, price, flightClass, currency}) => {

    return (
        <div className='airfare-card'>
            <img src={imgurl} className='airfare-img' alt=''/>
            <div className='airfare-details'>
                <div className={'airline'}>SINGAPORE AIRLINES</div>
                <div>{city}, {country}</div>
                <div className={'flightClass'}>{flightClass}</div>
                <div className={'price'}>{currency} {price}</div>
            </div>

        </div>

    );
};

export default AirfareTicketCard;