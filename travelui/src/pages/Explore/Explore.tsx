import React from "react";
import "../Pages.css";
import { Container, StyledPageTitle } from "../../components/reusable/Styles";
import { Link, useLocation } from "react-router-dom";
import ExploreBanner from "../../components/Explore/ExploreBanner";
import London from "../../assets/images/London.jpeg";
import { Breadcrumb, Tabs } from "antd";
import Attractions from "../../components/Explore/Attractions";
import TikTokSection from "../../components/reusable/TikTok/TikTokSection";
import {TIKTOK_LIST} from "../../utils/const";
import Accommodations from "../../components/Explore/Accommodations";

const Explore: React.FC = () => {
    const countryName = useLocation().pathname.split("/")[2];
    const destinationName = useLocation().pathname.split("/")[3];

    const attrTab = <>
            <Attractions tabName={'Attractions'} destinationName={destinationName}/>
            <TikTokSection title={'Trending Places on TikTok'} TikTokList={TIKTOK_LIST}/>
        </>

    const foodTab = <>
        <Attractions tabName={'Restaurants'} destinationName={destinationName}/>
        <TikTokSection title={'Food Recommendations from TikTok'} TikTokList={TIKTOK_LIST}/>
    </>

    const accomTab = <>
        <Accommodations tabName={'Accommodations'} destinationName={destinationName}/>
    </>



    return (
        <body className="home">
            <ExploreBanner
                coverUrl={London}
                destinationName={destinationName}
            />
            <Container
                width="70%"
                height={"195vh"}
                paddingtop={"2rem"}
                align="flex-start"
            >
                <Breadcrumb style={{ fontSize: "20px" }}>
                    <Breadcrumb.Item>
                        <Link to="/">Home</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to="/">Explore</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>{destinationName}</Breadcrumb.Item>
                </Breadcrumb>
                <StyledPageTitle>
                    {" "}
                    {`${destinationName}, ${countryName}`}{" "}
                </StyledPageTitle>

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
                            label: `Guides`,
                            key: '4',
                            children: `Dump guides here`,
                        },
                    ]}
                />
            </Container>
        </body>
    );
};

export default Explore;
