import React from 'react';
import './Cards.css';
import Location from '../../../assets/images/locationicon.png'

type Props = {
    imgurl: string;
    attrCity: string;
    attrCountry: string;
    attrPrice: number;
    attrClass: string;
    onClick?: React.MouseEventHandler
}

const AirfareTicketCard: React.FC<Props> = ({imgurl, attrCity, attrCountry, attrPrice, attrClass}) => {

    return (
        <div className='attr-card' >
            <img className='attr-img' src={imgurl} height="100%" alt=''/>
            <div className='attr-desc'>
                <h2 className="attr-city"> {attrCity} </h2>
                <div style={{flexDirection: 'row', display: 'flex', alignItems: 'start'}}>
                    <img src={Location} height="14px" alt='' style={{marginRight: '5px', marginBottom: '2px', marginTop: '2px'}}/>
                    <h2 className="attr-country"> {attrCountry} </h2>
                </div>
                <div style={{overflowX: 'hidden', textOverflow: 'ellipsis', width: '100%'}}>
                    <h2 className="attr-price"> {attrPrice} </h2>
                    <h2 className="attr-class"> {attrClass} </h2>
                </div>
            </div>
        </div>
    );
};

export default AirfareTicketCard;