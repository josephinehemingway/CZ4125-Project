import React from 'react';
import './Cards.css';

type Props = {
    imgurl: string;
    attrName: string;
    attrActivity: string;
    attrLocation: string;
    onClick?: React.MouseEventHandler
}

const AttractionsCard: React.FC<Props> = ({imgurl, attrName, attrLocation, attrActivity, onClick}) => {
    return (
        <div className='attr-card' onClick={onClick}>
            <img className='attr-img' src={imgurl} height="100%" alt=''/>
            <div className='attr-desc'>
                <h2 className="attr-name"> {attrName} </h2>
                <h2 className="attr-location"> {attrLocation} </h2>
                <h2 className="attr-activity"> {attrActivity} </h2>
            </div>
        </div>
    );
};

export default AttractionsCard;