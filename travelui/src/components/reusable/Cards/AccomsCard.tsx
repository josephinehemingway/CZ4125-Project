import React from 'react';
import './Cards.css';

type Props = {
    url: string;
    name: string;
    onClick?: React.MouseEventHandler
}

const AccomsCard: React.FC<Props> = ({url, name, onClick}) => {
    return (
        <div className='acc-card' onClick={onClick}>
            <img className='attr-img' src={url} height="100%"  alt=''/>
            <h2 className="attr-name"> {name} </h2>
        </div>
    );
};

export default AccomsCard;