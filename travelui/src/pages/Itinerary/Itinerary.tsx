import React, {useEffect, useState} from "react";
import "../Pages.css";
import {
    Container,
    StyledPageTitle,
    StyledItinerarySubheading,
    HorizontalScroll, RowContainer, StyledSectionTitle, StyledLink
} from "../../components/reusable/Styles";
import { Link, useLocation } from "react-router-dom";
import {Breadcrumb, Spin} from "antd";
import {TIKTOK_LIST} from "../../utils/const";
import ItineraryBanner from "../../components/Itinerary/ItineraryBanner";
import TikTokSection from "../../components/reusable/TikTok/TikTokSection";
import {capitalise} from "../../utils/helperfunctions"
import ItinerarySection from "../../components/Itinerary/ItinerarySection";
import { PrinterOutlined, DownloadOutlined, ShareAltOutlined } from '@ant-design/icons';
import AttractionsCard from "../../components/reusable/Cards/AttractionsCard";

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

const Itinerary: React.FC = () => {
    const destinationDetails = useLocation().pathname.split("/")[2];
    const destinationName = destinationDetails.split("-")[0].replace("%20", " ");
    const seasonSelected = destinationDetails.split("-")[1];
    const durationSelected = parseInt(destinationDetails.split("-")[2]);

    let formattedDestination = capitalise(destinationName)

    const [data, setdata] = useState<AttractionsApi[]>([])
    const [loading, setLoading] = useState<Boolean>(true)

    useEffect(() => {
        setLoading(true);
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch(`/attractions-api?destination=${formattedDestination}`).then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata(data);
                setLoading(false);
                console.log(data)
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


    const citiesTab = <div style={{width: '100%'}}>
        <RowContainer
            height={"3rem"}
            align="center"
            justify={"space-between"}
            margintop={"1rem"}
        >
            <StyledSectionTitle>
                Explore Top Attractions in {formattedDestination}
            </StyledSectionTitle>
            <StyledLink
                href="https://www.tiktok.com/search?q=travel"
                target="_blank"
                rel="noopener noreferrer"
            >
                See More {">"}
            </StyledLink>
        </RowContainer>
        <HorizontalScroll height={'100%'}>
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

        </HorizontalScroll>
        {/* <TikTokSection title={'Trending Places on TikTok'} TikTokList={TIKTOK_LIST}/> */}
    </div>

    return (
        <body className="home">
            <ItineraryBanner
                destinationName={formattedDestination}
                seasonSelected={seasonSelected}
                durationSelected={durationSelected}
            />
            <Container
                width="70%"
                height={"22vh"}
                paddingtop={"2rem"}
                align="flex-start"
            >
                <Breadcrumb style={{ fontSize: "20px", marginBottom: '0.5rem' }}>
                    <Breadcrumb.Item>
                        <Link to="/">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/">Grab 'n' Go Itinerary</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{formattedDestination}</Breadcrumb.Item>
                </Breadcrumb>
                <StyledPageTitle>
                    {formattedDestination}
                </StyledPageTitle>
                <div style={{ display: 'flex', flexDirection: 'row', width: '100%',
                    justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem',
                    marginTop: '1rem'
                }}>
                    <StyledItinerarySubheading >
                        {`${durationSelected} Day Itinerary for ${seasonSelected}`}
                    </StyledItinerarySubheading>
                    <div className='icons' >
                        <DownloadOutlined style={{ fontSize: '25px', marginRight: '1rem'}}/>
                        <PrinterOutlined style={{ fontSize: '25px', marginRight: '1rem'}} />
                        <ShareAltOutlined style={{ fontSize: '25px'}}/>
                    </div>
                </div>
            </Container>
            <ItinerarySection destinationName={formattedDestination}/>
            <Container width="70%"
                       height={"175vh"}
                       paddingtop={"1rem"}
                       align="flex-start">
                {citiesTab}
            </Container>

        </body>
    );
};

export default Itinerary;
