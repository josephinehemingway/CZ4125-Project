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
    const lengthName = name.length;

    return (
        <div className='acc-card' onClick={onClick}>
            <img className='attr-img' src={url} height="100%"  alt=''/>
            <div className={lengthName > 21 ? 'acc-desc-2lines' : 'acc-desc'}>
                <h2 className="acc-name"> {name} </h2>
                <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <h2 className="acc-rating"> {rating} </h2>
                    <StarOutlined height={'16px'}/>
                </div>
            </div>
        </div>
    );
};

export default AccomsCard;