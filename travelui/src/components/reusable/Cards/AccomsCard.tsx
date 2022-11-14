import React from 'react';
import './Cards.css';
import { StarOutlined } from '@ant-design/icons';

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
            <div className='acc-desc'>
                <h2 className="acc-name"> {name} </h2>
                <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <h2 className="acc-rating"> {rating}.0 </h2>
                    <StarOutlined height={'16px'}/>
                </div>
            </div>
        </div>
    );
};

export default AccomsCard;