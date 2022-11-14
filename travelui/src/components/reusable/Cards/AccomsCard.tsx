import React from 'react';
import './Cards.css';

type Props = {
    url: string;
    name: string;
    rating: number;
    onClick?: React.MouseEventHandler
}

const AccomsCard: React.FC<Props> = ({url, name, rating, onClick}) => {
    return (
        <div className='acc-card' onClick={onClick}>
            <img className='attr-img' src={url} height="100%"  alt=''/>
            <div className='attr-desc'>
                <h2 className="attr-name"> {name} </h2>
                <h2 className="attr-rating"> {rating}.0 </h2>
            </div>
        </div>
    );
};

export default AccomsCard;