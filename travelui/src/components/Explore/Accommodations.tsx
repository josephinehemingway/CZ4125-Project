import React, { useState, useEffect } from 'react';
import {HorizontalScroll, RowContainer, StyledLink, StyledSectionTitle, StyledSubSubheading} from '../reusable/Styles';
import './explorestyles.css';
import AccomsCard from "../reusable/Cards/AccomsCard";
import Map from "./Map";

type Props = {
    tabName: string;
    destinationName: string;
    countryName: string
};

//this component will be used for attractions and food section
const Accommodations: React.FC<Props>= ({ destinationName, countryName }) => {
    // here we will pass in the destination, tiktoks, list of attractions

    // get data
    interface AccommodationsApi{
        Id: string,
        Name: string,
        ImageUrl: string,
        ReviewUrl: string,
        Rating: number,
        Lat: number,
        Lng: number
    }
    
    const [data, setdata] = useState<AccommodationsApi[]>([])
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch(`/accommodations-api?destination=${countryName}`).then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata(data);
                console.log(data)
            })
        );
    }, []);

    const accomCardsArray = data.map((d) => (
        <a key={d.Id} href={d.ReviewUrl} target="_blank" rel="noopener noreferrer">
            <AccomsCard
                // onClick={scrollToTop}
                url={d.ImageUrl}
                name={d.Name}
                rating={d.Rating}
            />
        </a>
    ));

    return (
        <div style={{marginBottom: '3rem'}}>
            <RowContainer
                height={"3rem"}
                align="center"
                justify={"space-between"}
                margintop={"1rem"}
            >
                <StyledSectionTitle> Accommodations in {destinationName} </StyledSectionTitle>
            </RowContainer>

            <RowContainer
                height={"3rem"}
                align="center"
                justify={"space-between"}
            >
                <StyledSubSubheading>
                    Hotels
                </StyledSubSubheading>
                <StyledLink
                    href="https://www.tiktok.com/search?q=travel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See More {">"}
                </StyledLink>
            </RowContainer>
            <HorizontalScroll height={'100%'}>
                {accomCardsArray}
            </HorizontalScroll>

            <RowContainer
                height={"3rem"}
                align="center"
                justify={"space-between"}
                margintop={"1rem"}
            >
                <StyledSubSubheading>
                    Airbnbs
                </StyledSubSubheading>
                <StyledLink
                    href="https://www.tiktok.com/search?q=travel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See More {">"}
                </StyledLink>
            </RowContainer>
            <HorizontalScroll height={'100%'}>
                {accomCardsArray}
            </HorizontalScroll>

            <RowContainer
                height={"3rem"}
                align="center"
                justify={"space-between"}
                margintop={"2rem"}
            >
                <StyledSectionTitle marginbottom={'1rem'}>
                    Map View
                </StyledSectionTitle>
            </RowContainer>
            <div style={{height:'200px'}} >
                <Map />
            </div>
        </div>
    );
};

export default Accommodations;