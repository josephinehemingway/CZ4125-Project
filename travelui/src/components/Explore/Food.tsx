import React, {useState, useEffect } from 'react';
import {RowContainer, StyledLink, StyledSectionTitle} from '../reusable/Styles';
import './explorestyles.css';
import AttractionsCard from "../reusable/Cards/AttractionsCard";
import TikTokSection from "../reusable/TikTok/TikTokSection";
import Map from "./Map";
import {Spin} from "antd";

type Props = {
    tabName: string;
    destinationName: string;
    // countryName: string
};

const Food: React.FC<Props>= ({ tabName, destinationName }) => {

    interface FoodApi{
        Name: string,
        Description: string,
        Address: string,
        Image: string,
        Rating: string,
        RestaurantAwardPoint: string;
        Dishes: string;
        MustTry: boolean;
        Lat: number,
        Lon: number
    }
    interface TikTokFood{
        Id: string,
        TiktokUrl: string
    }

    const [data, setdata] = useState<FoodApi[]>([])
    const [tiktokdata, settiktokdata] = useState<TikTokFood[]>([])
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        setLoading(true);
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch(`/food-api?destination=${destinationName}`).then((res) =>
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
        fetch(`/tiktok-food-api?destination=${destinationName}`).then((res) =>
            res.json().then((tiktokdata) => {
                // Setting a data from api
                settiktokdata(tiktokdata);
                setLoading(false);
                console.log(tiktokdata)
            })
        );
    }, [destinationName]);

    const foodCardsArray = data.map((d, index) => {
        console.log(d.Name)
        return (<AttractionsCard
            imgurl={d.Image}
            attrName={d.Name}
            attrActivity={d.Description}
            attrLocation={d.Address}
        />);
    });

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
                        : foodCardsArray
                    }
                </div>
                <div style={{width: '30%'}}>
                    <Map 
                        destinationName={destinationName}
                        locations={data}/>
                </div>
            </div>
            <div className={'tiktok'}>
            <TikTokSection title={'Trending Places on TikTok'} TikTokList={tiktokdata}/>
            </div>
        </div>
    );
};

export default Food;