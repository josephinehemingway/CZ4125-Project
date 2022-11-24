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

    const [attractions, setAttractions] = useState<AttractionsApi[]>([])
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        setLoading(true);
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch(`/attractions-api?destination=${destinationName}`).then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setAttractions(data);
                setLoading(false);
                console.log(data)
            })
        );
    }, [destinationName]);

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
                        {loading ?
                            <div style={{ width: '100%',
                                height: '50%',
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center'}}>
                                <Spin tip="Loading..." />
                            </div>
                            : itineraryCardsArray
                        }
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