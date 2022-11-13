import React, {useState, useEffect } from 'react';
import {RowContainer, StyledLink, StyledSectionTitle} from '../reusable/Styles';
import './explorestyles.css';
import {ATTRACTION_LIST} from "../../utils/const";
import {Link} from "react-router-dom";
import AttractionsCard from "../reusable/Cards/AttractionsCard";
import Map from "./Map";

type Props = {
    tabName: string;
    destinationName: string;
};

const Attractions: React.FC<Props>= ({ tabName, destinationName }) => {
    // here we will pass in the destination, tiktoks, list of attractions

        // get data
        const [data, setdata] = useState({
            url: "",
            title: "",
    
        });
      
        // Using useEffect for single rendering
        useEffect(() => {
            // Using fetch to fetch the api from 
            // flask server it will be redirected to proxy
            fetch("/attractions").then((res) =>
                res.json().then((data) => {
                    // Setting a data from api
                    setdata({
                        url: data.url,
                        title: data.title,
                    });
                    console.log(data)
                })
            );
        }, []);
    

    const attrCardsArray = ATTRACTION_LIST.map((d) => (
        <Link key={d.id} to={d.link}>
            <AttractionsCard
                // onClick={scrollToTop}
                url={d.imgUrl}
                attrName={d.name}
            />
        </Link>
    ));

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
            <div>
                {data.title}
            </div>
            <div className={'explore-gallery'}>
                <div className='explore-subgallery'>
                    {attrCardsArray}
                </div>
                <div style={{width: '30%'}}>
                    <Map />
                </div>
            </div>
        </div>
    );
};

export default Attractions;