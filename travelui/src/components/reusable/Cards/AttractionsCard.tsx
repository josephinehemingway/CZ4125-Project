import React from 'react';
import './Cards.css';

type Props = {
    url: string;
    attrName: string;
    attrActivity: string;
    attrLocation: string;
    onClick?: React.MouseEventHandler
}

const AttractionsCard: React.FC<Props> = ({url, attrName, attrLocation, attrActivity, onClick}) => {
    return (
        <div className='attr-card' onClick={onClick}>
            <img className='attr-img' src={url} height="100%"  alt=''/>
            <h2 className="attr-name"> {attrName} </h2>
            <h2 className="attr-activity"> {attrActivity} </h2>
            <h2 className="attr-location"> {attrLocation} </h2>
        </div>
    );
};

export default AttractionsCard;