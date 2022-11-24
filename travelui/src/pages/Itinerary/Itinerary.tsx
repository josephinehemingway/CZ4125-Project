import React from "react";
import "../Pages.css";
import { Container, StyledPageTitle, StyledItinerarySubheading } from "../../components/reusable/Styles";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb } from "antd";
import {TIKTOK_LIST} from "../../utils/const";
import ItineraryBanner from "../../components/Itinerary/ItineraryBanner";
import TikTokSection from "../../components/reusable/TikTok/TikTokSection";
import Attractions from "../../components/Explore/Attractions";
import {capitalise} from "../../utils/helperfunctions"
import ItinerarySection from "../../components/Itinerary/ItinerarySection";
import { PrinterOutlined, DownloadOutlined, ShareAltOutlined } from '@ant-design/icons';

const Itinerary: React.FC = () => {
    const destinationDetails = useLocation().pathname.split("/")[2];
    const destinationName = destinationDetails.split("-")[0].replace("%20", " ");
    const seasonSelected = destinationDetails.split("-")[1];
    const durationSelected = parseInt(destinationDetails.split("-")[2]);

    let formattedDestination = capitalise(destinationName)

    const citiesTab = <div style={{width: '100%'}}>
        <Attractions tabName={'Attractions'} destinationName={formattedDestination} />
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
            <ItinerarySection />
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
