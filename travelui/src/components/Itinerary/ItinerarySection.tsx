import React from 'react';
import {
    StyledSectionTitle
} from "../reusable/Styles";
import ItineraryCard from "../reusable/Cards/ItineraryCard";

type Props = {
    destinationName?: string;
    seasonSelected?: string;
    durationSelected?: number;
}

const ItinerarySection: React.FC<Props> = ({destinationName, seasonSelected,durationSelected}) => {

    const data = [{
            "day": 1,
            "activities": ["Skiing", "Eating", "Hiking"]
        },
        {
            "day": 2,
            "activities": ["Skiing", "Eating", "Hiking"]
        },
        {
            "day": 3,
            "activities": ["Skiing", "Eating", "Hiking"]
        },
        {
            "day": 3,
            "activities": ["Skiing", "Eating", "Hiking"]
        },
        {
            "day": 3,
            "activities": ["Skiing", "Eating", "Hiking"]
        },
        {
            "day": 3,
            "activities": ["Skiing", "Eating", "Hiking"]
        },
    ]

    const itineraryCardsArray = data.map((d, index) => {
        return (<ItineraryCard
                    activities={d.activities}
                    dayNumber={String(d.day)}
                />)
    });

    return (
        <div className="itinerary-section">
            <div className='itinerary-container' >
                <StyledSectionTitle margintop={'0.5rem'}>
                    Recommended Itinerary
                </StyledSectionTitle>
                {itineraryCardsArray}
            </div>

        </div>
    );
};

export default ItinerarySection;