import React from 'react';
import './Cards.css';

type Props = {
    dayNumber: string;
    activities: string[];
    rating?: number;
}

const ItineraryCard: React.FC<Props> = ({activities, dayNumber, rating}) => {

    const activityArray = activities.map((d) => (
            <div className='activity'>• {d}</div>
    ));

    return (
        <div className='itinerary-card'>
            <h2 className="day"> Day {dayNumber} </h2>
            {activityArray}
        </div>
    );
};

export default ItineraryCard;