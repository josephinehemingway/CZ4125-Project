import React, {useState, useEffect} from 'react';
import {
    StyledSectionTitle
} from "../reusable/Styles";
import ItineraryCard from "../reusable/Cards/ItineraryCard";
import Map from "../Explore/Map";
import './itinerarystyles.css';
import {Spin} from "antd";

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
    interface ItineraryApi{
        day: number,
        destinations: string[],
        total_distance: number,
        nearest_hotel: string
    }

    const [data, setdata] = useState<ItineraryApi[]>([])
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        setLoading(true);
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch(`/planner-api?destination=${destinationName}&days=${durationSelected}`).then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata(data);
                setLoading(false);
                console.log(data)
            })
        );
    }, [destinationName, durationSelected]);

    const itineraryCardsArray = data.map((d) => {
        return (<ItineraryCard
            activities={d.destinations}
            dayNumber={String(d.day+1)}
            hotel={d.nearest_hotel}
            totalDistance={d.total_distance}
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