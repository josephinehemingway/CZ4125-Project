import React from 'react';
import './Cards.css';

type Props = {
    imgurl: string;
    attrName: string;
}

const GuidesCard: React.FC<Props> = ({imgurl, attrName}) => {
    return (
        <div className='attr-card'>
            <img className='attr-img' src={imgurl} height="100%" alt=''/>
            <div className='acc-desc'>
                <h2 className="acc-name"> {attrName} </h2>
            </div>
        </div>
    );
};

export default GuidesCard;