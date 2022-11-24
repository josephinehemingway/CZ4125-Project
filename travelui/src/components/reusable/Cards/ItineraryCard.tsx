import React from 'react';
import './Cards.css';

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
            <h2 className="day"> Day {dayNumber} </h2>
            <div className='itinerary-details'>
                <h2 className="day"> Attractions to Visit</h2>
                {activityArray}
            </div>
            <div className='itinerary-details'>
                <h2 className="day"> Nearest Hotel </h2>
                {hotel}
                <h2 className="day"> Total Distance </h2>
                {totalDistance}
            </div>



        </div>
    );
};

export default ItineraryCard;