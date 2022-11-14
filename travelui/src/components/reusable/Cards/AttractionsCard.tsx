import React from 'react';
import './Cards.css';
import Location from '../../../assets/images/locationicon.png'

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
                <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
                    <img src={Location} height="14px" alt='' style={{marginRight: '5px', marginBottom: '2px'}}/>
                    {/*<Location />*/}
                    <h2 className="attr-location"> {attrLocation} </h2>
                </div>
                <div style={{overflowX: 'hidden', textOverflow: 'ellipsis', width: '100%'}}>
                    <h2 className="attr-activity"> {attrActivity} </h2>
                </div>
            </div>
        </div>
    );
};

export default AttractionsCard;