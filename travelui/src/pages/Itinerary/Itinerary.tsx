import React from "react";
import "../Pages.css";
import { Container, StyledPageTitle } from "../../components/reusable/Styles";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import {TIKTOK_LIST} from "../../utils/const";
import London from "../../assets/images/London.jpeg";
import ItineraryBanner from "../../components/Itinerary/ItineraryBanner";
import TikTokSection from "../../components/reusable/TikTok/TikTokSection";
import Attractions from "../../components/Explore/Attractions";

function capitalise(destinationName: string) {
    const arr = destinationName.split(" ");
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    return arr.join(" ");
}

const Itinerary: React.FC = () => {
    const destinationDetails = useLocation().pathname.split("/")[2];
    const destinationName = destinationDetails.split("-")[0].replace("%20", " ");
    const seasonSelected = destinationDetails.split("-")[1];
    const durationSelected = parseInt(destinationDetails.split("-")[2]);

    let formattedDestination = capitalise(destinationName)

    const citiesTab = <>
        <Attractions tabName={'Attractions'} destinationName={formattedDestination}/>
        <TikTokSection title={'Trending Places on TikTok'} TikTokList={TIKTOK_LIST}/>
    </>

    return (
        <body className="home">
            <ItineraryBanner
                coverUrl={London}
                destinationName={formattedDestination}
                seasonSelected={seasonSelected}
                durationSelected={durationSelected}
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
                        <Link to="/">Grab 'n' Go Itinerary</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{formattedDestination}</Breadcrumb.Item>
                </Breadcrumb>
                <StyledPageTitle>
                    {formattedDestination}
                </StyledPageTitle>
                {citiesTab}
            </Container>
        </body>
    );
};

export default Itinerary;
