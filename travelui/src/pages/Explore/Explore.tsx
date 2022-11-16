import React, {useEffect, useState} from "react";
import "../Pages.css";
import { Container, StyledPageTitle } from "../../components/reusable/Styles";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, Tabs } from "antd";
import {TIKTOK_LIST} from "../../utils/const";
import ExploreBanner from "../../components/Explore/ExploreBanner";
import TikTokSection from "../../components/reusable/TikTok/TikTokSection";
import Attractions from "../../components/Explore/Attractions";
import Accommodations from "../../components/Explore/Accommodations";
import Guides from "../../components/Explore/Guides";

const Explore: React.FC = () => {
    // const countryName = useLocation().pathname.split("/")[2];
    const destinationName = useLocation().pathname.split("/")[2];
    const [coverUrl, setCoverUrl] = useState<string>('')

    const attrTab = <>
            <Attractions tabName={'Attractions'} destinationName={destinationName} />
            <TikTokSection title={'Trending Places on TikTok'} TikTokList={TIKTOK_LIST}/>
        </>

    const foodTab = <>
        <Attractions tabName={'Restaurants'} destinationName={destinationName}/>
        <TikTokSection title={'Food Recommendations from TikTok'} TikTokList={TIKTOK_LIST}/>
    </>

    const accomTab = <>
        <Accommodations tabName={'Accommodations'} destinationName={destinationName} />
    </>

    const guidesTab = <>
        <Guides tabName={'Guides'} destinationName={destinationName}/>
    </>

    useEffect(() => {
        fetch(`/banner?destination=${destinationName}`).then((res) =>
            res.json().then((data) => {
                setCoverUrl(data);
                console.log(data)
            })
        );
    }, []);

    return (
        <body className="home">
            <ExploreBanner
                coverUrl={coverUrl}
                destinationName={destinationName}
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
                    <Breadcrumb.Item>{destinationName}</Breadcrumb.Item>
                </Breadcrumb>
                <StyledPageTitle>
                    {" "}
                    {`${destinationName}`}{" "}
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
                            children: guidesTab,
                        },
                    ]}
                />
            </Container>
        </body>
    );
};

export default Explore;
