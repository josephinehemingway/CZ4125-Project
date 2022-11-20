import React from 'react';
import './Cards.css';

type Props = {
    imgurl: string;
    tipsTitle: string;
}

const GuidesCard: React.FC<Props> = ({imgurl, tipsTitle}) => {
    const lengthName = tipsTitle.length;

    return (
        <div className='guides-card'>
            <img className='attr-img' src={imgurl} height="100%" alt=''/>
            <div className={lengthName > 21 ? 'acc-desc-2lines' : 'acc-desc'}>
                <h2 className="acc-name"> {tipsTitle} </h2>
            </div>
        </div>
    );
};

export default GuidesCard;