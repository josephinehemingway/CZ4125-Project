import React, {useEffect, useState} from "react";
import "../Pages.css";
import { Container, StyledPageTitle, RowContainer, StyledLink, StyledSubSubheading, HorizontalScroll } from "../../components/reusable/Styles";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, Tabs } from "antd";
import {TIKTOK_LIST} from "../../utils/const";
import ExploreBanner from "../../components/Explore/ExploreBanner";
import TikTokSection from "../../components/reusable/TikTok/TikTokSection";
import Attractions from "../../components/Explore/Attractions";
import Accommodations from "../../components/Explore/Accommodations";
import Food from "../../components/Explore/Food";
import Guides from "../../components/Explore/Guides";
import {capitalise} from "../../utils/helperfunctions"
import {Spin} from "antd";
import AirfareTicketCard from "../../components/reusable/Cards/AirfareCard";


const Explore: React.FC = () => {
    // const countryName = useLocation().pathname.split("/")[2];
    const destinationName = useLocation().pathname.split("/")[2];
    const [coverUrl, setCoverUrl] = useState<string>('')
    const [loading, setLoading] = useState<Boolean>(true)

    let formattedDestination = capitalise(destinationName)

    interface AirfareTicketApi{
        Id: string,
        City: string,
        Country: string,
        Currency: string,
        Price: number,
        Class: string,
        ImageUrl: string,
    }

    useEffect(() => {
        setLoading(true);
        // Using fetch to fetch the api from 
        // flask server it will be redirected to proxy
        fetch(`/airfareprice-api?destination=${destinationName}`).then((res) =>
            res.json().then((data) => {
                // Setting a data from api
                setdata(data);
                setLoading(false);
                console.log(data)
            })
        );
    }, [destinationName]);
    
    const [data, setdata] = useState<AirfareTicketApi[]>([])

    const airfarePriceCardsArray = data.map((d) => (
        <a key={d.Id} href={'https://www.singaporeair.com/en_UK/sg/special-offers/flight-from-Singapore/'} target="_blank" rel="noopener noreferrer">
            <AirfareTicketCard
                // onClick={scrollToTop}
                imgurl={d.ImageUrl}
                attrCity={d.City}
                attrCountry={d.Country}
                attrPrice={d.Price}
                attrClass={d.Class}
            />
        </a>
    ));

    const attrTab = <>
            <Attractions tabName={'Attractions'} destinationName={formattedDestination} />
            <TikTokSection title={'Trending Places on TikTok'} TikTokList={TIKTOK_LIST}/>
        </>

    const foodTab = <>
        <Food tabName={'Restaurants'} destinationName={formattedDestination}/>
        <TikTokSection title={'Food Recommendations from TikTok'} TikTokList={TIKTOK_LIST}/>
    </>

    const accomTab = <>
        <Accommodations tabName={'Accommodations'} destinationName={formattedDestination} />
    </>

    const guidesTab = <>
        <Guides tabName={'Travel Tips'} destinationName={formattedDestination} countryImgUrl={coverUrl}/>
    </>

    useEffect(() => {
        fetch(`/banner?destination=${destinationName}`).then((res) =>
            res.json().then((data) => {
                setCoverUrl(data);
                console.log(data)
            })
        );
    }, [destinationName]);

    return (
        <body className="home">
            <ExploreBanner
                coverUrl={coverUrl}
                destinationName={formattedDestination}
            />
            <Container
                width="70%"
                height={"195vh"}
                paddingtop={"2rem"}
                align="flex-start"
            >
                <Breadcrumb style={{ fontSize: "20px", marginBottom: '0.5rem' }}>
                    <Breadcrumb.Item>
                        <Link to="/">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/">Explore</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{formattedDestination}</Breadcrumb.Item>
                </Breadcrumb>
                <StyledPageTitle>
                    {" "}
                    {`${formattedDestination}`}{" "}
                </StyledPageTitle>
                <RowContainer
                    height={"3rem"}
                    align="center"
                    justify={"space-between"}
                >
                    <StyledSubSubheading>
                        Airfare Price
                    </StyledSubSubheading>
                    <StyledLink
                        href="https://www.singaporeair.com/en_UK/sg/special-offers/flight-from-Singapore/"
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
                        : airfarePriceCardsArray
                    }
                </HorizontalScroll>

                <Tabs
                    size={'large'}
                    defaultActiveKey="1"
                    tabBarGutter={50}
                    tabBarStyle={{fontFamily: 'Poppins-Medium'}}
                    style={{ width: '100%'}}
                    items={[
                        {
                            label: `Attractions`,
                            key: '1',
                            children: attrTab,
                        },
                        {
                            label: `Food`,
                            key: '2',
                            children: foodTab,
                        },
                        {
                            label: `Accommodations`,
                            key: '3',
                            children: accomTab,
                        },
                        {
                            label: `Travel Tips`,
                            key: '4',
                            children: guidesTab,
                        },
                    ]}
                />
            </Container>
        </body>
    );
};

export default Explore;
