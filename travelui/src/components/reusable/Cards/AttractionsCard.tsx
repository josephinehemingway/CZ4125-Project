import React from 'react';
import './Cards.css';

type Props = {
    url: string;
    attrName: string;
    onClick?: React.MouseEventHandler
}

const AttractionsCard: React.FC<Props> = ({url, attrName, onClick}) => {
    return (
        <div className='attr-card' onClick={onClick}>
            <img className='attr-img' src={url} height="100%"  alt=''/>
            <h2 className="attr-name"> {attrName} </h2>
        </div>
    );
};

export default AttractionsCard;