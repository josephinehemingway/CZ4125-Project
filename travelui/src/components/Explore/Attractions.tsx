import React, {useState, useEffect } from 'react';
import {RowContainer, StyledLink, StyledSectionTitle} from '../reusable/Styles';
import './explorestyles.css';
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
    interface AttractionsApi{
        id: string,
        url: string,
        title: string,
        cities: string[]
    }
    
    const [data, setdata] = useState<AttractionsApi[]>([])
    useEffect(() => {
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch("/attractions").then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata(data);
                console.log(data)
            })
        );
    }, []);
    
    // const attrCardsArray = data.map((d) => (
    //     <Link key={d.id} to={d.url}>
    //         <AttractionsCard
    //             // onClick={scrollToTop}
    //             url={d.url}
    //             attrName={d.title}
    //         />
    //     </Link>
    // ));

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
                    {
                        data.map(d =>{
                            console.log(d.title)
                            return(
                            <Link key={d.id} to={"/explore/UK/Zurich"}>
                                <AttractionsCard
                                    //onClick={scrollToTop}
                                    url={'../assets/images/Zurich.jpeg'}
                                    attrName={d.title}
                                    
                                />
                            </Link>)})
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