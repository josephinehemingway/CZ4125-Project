import React, {useState, useEffect } from 'react';
import {RowContainer, StyledLink, StyledSectionTitle} from '../reusable/Styles';
import './explorestyles.css';
import AttractionsCard from "../reusable/Cards/AttractionsCard";
import Map from "./Map";
import {Spin} from "antd";

type Props = {
    tabName: string;
    destinationName: string;
    countryName: string
};

const Attractions: React.FC<Props>= ({ tabName, destinationName, countryName }) => {

    interface AttractionsApi{
        Name: string,
        Activity: string,
        Location: string,
        ImageUrl: string,
        Ratings: string,
        Review_url: string;
        Lat: number,
        Lng: number
    }

    const [data, setdata] = useState<AttractionsApi[]>([])
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch(`/attractions-api?destination=${destinationName}`).then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata(data);
                setLoading(false);
                console.log(data)
                console.log(countryName)
            })
        );
    }, []);
    
    const attrCardsArray = data.map((d, index) =>{
        console.log(d.Name)
        return(
        <a key={index}
           href={d.Review_url}
           target="_blank"
           rel="noopener noreferrer">
            <AttractionsCard
                imgurl={d.ImageUrl}
                attrName={d.Name}
                attrActivity={d.Activity}
                attrLocation={d.Location}
                
            />
        </a>)});

    return (
        <div style={{marginBottom: '3rem'}}>
            <RowContainer
                height={"3rem"}
                align="center"
                justify={"space-between"}
                margintop={"1rem"}
            >
                <StyledSectionTitle>
                    Explore Top {tabName} in {destinationName}
                </StyledSectionTitle>
                <StyledLink
                    href="https://www.tiktok.com/search?q=travel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See More {">"}
                </StyledLink>
            </RowContainer>
            <div className={'explore-gallery'}>
                <div className='explore-subgallery'>
                    {loading ?
                        <div style={{ width: '100%',
                            height: '50%',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'}}>
                            <Spin tip="Loading..." />
                        </div>
                        : attrCardsArray
                    }
                </div>
                <div style={{width: '30%'}}>
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default Attractions;