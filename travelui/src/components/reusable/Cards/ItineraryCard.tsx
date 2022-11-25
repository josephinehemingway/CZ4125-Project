import React from 'react';
import './Cards.css';
import Walking from './../../../assets/images/walk.png';
import Bed from './../../../assets/images/bed.png';


type Props = {
    dayNumber: string;
    activities: string[];
    rating?: number;
    hotel: string
    totalDistance: number
}

const ItineraryCard: React.FC<Props> = ({activities, dayNumber, rating, hotel, totalDistance}) => {

    const activityArray = activities.map((d) => (
            <div className='activity'>• {d}</div>
    ));

    return (
        <div className='itinerary-card'>
            <h2 className="day"> DAY {dayNumber} </h2>
            <div className='itinerary-card-content'>
                <div className='itinerary-details'>
                    <h2 className="day"> ATTRACTIONS ROUTE </h2>
                    {activityArray}
                </div>
                <div className='itinerary-details'>
                    <div className='itinerary-details'>
                        <h2 className="heading"> ESTIMATED TRAVEL DISTANCE </h2>
                        <div className={'icon-heading'}>
                            <img src={Walking} alt='distance' height={'20px'} style={{ marginRight: '0.5rem'}}/>
                            <div className='distance'> {totalDistance.toPrecision(2)} KM</div>
                        </div>
                    </div>
                    <div className='itinerary-details'>
                        <h2 className="heading"> NEAREST LODGING </h2>
                        <div className={'icon-heading'}>
                            <img src={Bed} alt='accoms' height={'12px'} style={{ marginRight: '0.5rem'}}/>
                            {hotel}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItineraryCard;