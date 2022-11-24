import React, {useEffect, useState} from "react";
import "../Pages.css";
import {
    Container,
    StyledPageTitle,
    StyledItinerarySubheading,
    HorizontalScroll, RowContainer, StyledSectionTitle, StyledLink, StyledLink2
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
import GuidesCard from "../../components/reusable/Cards/GuidesCard";

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

interface ItinerariesApi{
    City: string,
    title: string,
    url: string,
}

const Itinerary: React.FC = () => {
    const destinationDetails = useLocation().pathname.split("/")[2];
    const destinationName = destinationDetails.split("-")[0].replace("%20", " ");
    const seasonSelected = destinationDetails.split("-")[1];
    const durationSelected = parseInt(destinationDetails.split("-")[2]);

    let formattedDestination = capitalise(destinationName)

    const [attractions, setAttractions] = useState<AttractionsApi[]>([])
    const [itineraries, setItineraries] = useState<ItinerariesApi[]>([])
    const [loading, setLoading] = useState<Boolean>(true)
    const [loadingItinerary, setLoadingItinerary] = useState<Boolean>(true)


    useEffect(() => {
        setLoading(true);
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch(`/attractions-api?destination=${formattedDestination}`).then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setAttractions(data);
                setLoading(false);
                console.log(data)
            })
        );
    }, [destinationName]);

    useEffect(() => {
        setLoadingItinerary(true);
        console.log('duration: ', durationSelected);
        // Using fetch to fetch the api from
        // flask server it will be redirected to proxy
        fetch(`/itinerary-api?destination=${formattedDestination}&days=${durationSelected}`).then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setItineraries(data);
                setLoadingItinerary(false);
                console.log(data)
            })
        );
    }, [destinationName]);

    const attrCardsArray = attractions.map((d, index) =>{
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

    const itinerariesCardsArray = itineraries.map((d, index) =>{
        console.log(d.title)
        return(
            <a key={index}
               href={d.url}
               target="_blank"
               rel="noopener noreferrer">
                <GuidesCard
                    imgurl={'https://images.ctfassets.net/itrs3p223g0s/2RbOacx6d1RYNCLOtDmvg/f71f77059110c404db7874ad0d5d6fb6/canadians-travel_1920x1280.jpg'}
                    tipsTitle={d.title}
                />
            </a>)});


    const exploreScroll = <div style={{width: '100%', marginBottom: '2rem'}}>
        <RowContainer
            height={"3rem"}
            align="center"
            justify={"space-between"}
            margintop={"1rem"}
        >
            <StyledSectionTitle>
                Explore Top Attractions in {formattedDestination}
            </StyledSectionTitle>
            <Link to={`/explore/${formattedDestination}`}>
                <StyledLink2>
                    See More {">"}
                </StyledLink2>
            </Link>
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
    </div>

    const itinerariesScroll = <div style={{width: '100%', marginBottom: '1rem'}}>
        <RowContainer
            height={"3rem"}
            align="center"
            justify={"space-between"}
            margintop={"1rem"}
        >
            <StyledSectionTitle>
                Explore other itineraries from the web
            </StyledSectionTitle>
            <Link to={`/explore/${formattedDestination}`}>
                <StyledLink2>
                    See More {">"}
                </StyledLink2>
            </Link>
        </RowContainer>
        <HorizontalScroll height={'100%'}>
            {loadingItinerary ?
                <div style={{ width: '100%',
                    height: '50%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'}}>
                    <Spin tip="Loading..." />
                </div>
                : itinerariesCardsArray
            }

        </HorizontalScroll>
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
            <ItinerarySection destinationName={formattedDestination} attractions={attractions}/>
            <Container width="70%"
                       height={"100%"}
                       paddingtop={"1rem"}
                       align="flex-start">
                {exploreScroll}
            </Container>
            <Container width="70%"
                       height={"100%"}
                       paddingtop={"1rem"}
                       align="flex-start">
                {itinerariesScroll}
            </Container>
            {/* <TikTokSection title={'Trending Places on TikTok'} TikTokList={TIKTOK_LIST}/> */}

        </body>
    );
};

export default Itinerary;
