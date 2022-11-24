import React, {useState, useEffect } from 'react';
import {RowContainer, StyledLink, StyledSectionTitle} from '../reusable/Styles';
import './explorestyles.css';
import AttractionsCard from "../reusable/Cards/AttractionsCard";
import Map from "./Map";
import TikTokSection from "../reusable/TikTok/TikTokSection";
import {Spin} from "antd";

type Props = {
    tabName: string;
    destinationName: string;
    // countryName: string
};

const Attractions: React.FC<Props>= ({ tabName, destinationName }) => {

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

    interface TikTokAttractions{
        Id: string,
        TiktokUrl: string
    }

    const [data, setdata] = useState<AttractionsApi[]>([])
    const [tiktokdata, settiktokdata] = useState<TikTokAttractions[]>([])
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        setLoading(true);
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch(`/attractions-api?destination=${destinationName}`).then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata(data);
                setLoading(false);
                console.log(data)
            })
        );
    }, [destinationName]);

    useEffect(() => {
        setLoading(true);
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch(`/tiktok-attraction-api?destination=${destinationName}`).then((res) =>
            res.json().then((tiktokdata) => {
                // Setting a data from api
                settiktokdata(tiktokdata);
                setLoading(false);
                console.log(tiktokdata)
            })
        );
    }, [destinationName]);
    
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
                    <Map
                        destinationName={destinationName}
                        locations={data}
                    />
                </div>
            </div>
            <div className={'tiktok'}>
            <TikTokSection title={'Trending Places on TikTok'} TikTokList={tiktokdata}/>
            </div>
        </div>
    );
};

export default Attractions;