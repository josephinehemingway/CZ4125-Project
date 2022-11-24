import React, {useEffect, useState} from 'react';
import {
    StyledSectionTitle
} from "../reusable/Styles";
import ItineraryCard from "../reusable/Cards/ItineraryCard";
import Map from "../Explore/Map";
import {Spin} from "antd";
import './itinerarystyles.css';

interface AttractionsApi{
    Name: string,
    Activity: string,
    Location: string,
    ImageUrl: string,
    Ratings: string,
    Review_url: string;
    Lat: number,
    Lon: number
}

type Props = {
    destinationName: string;
    seasonSelected?: string;
    durationSelected?: number;
    attractions: AttractionsApi[];
}

const ItinerarySection: React.FC<Props> = ({destinationName, seasonSelected,durationSelected, attractions}) => {

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
            <div className='itinerary-container'>

                <StyledSectionTitle margintop={'0.5rem'}>
                    Recommended Itinerary
                </StyledSectionTitle>
                <div className='itinerary-gallery'>
                    <div className='itinerary-subgallery'>
                        { itineraryCardsArray }
                    </div>
                    <div style={{width: '30%'}}>
                        <Map
                            destinationName={destinationName}
                            locations={attractions}
                        />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ItinerarySection;