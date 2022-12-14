import React, {useEffect, useState} from "react";
import "../Pages.css";
import { Container, StyledPageTitle } from "../../components/reusable/Styles";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, Tabs } from "antd";
import ExploreBanner from "../../components/Explore/ExploreBanner";
import Attractions from "../../components/Explore/Attractions";
import Accommodations from "../../components/Explore/Accommodations";
import Food from "../../components/Explore/Food";
import Guides from "../../components/Explore/Guides";
import {capitalise} from "../../utils/helperfunctions"
import AnalyticsSection from "../../components/Explore/Analytics";


const Explore: React.FC = () => {
    const destinationName = useLocation().pathname.split("/")[2];
    const [cover, setCover] = useState<string>('')

    interface BannerAPI{
        CoverUrl: string,
        City: string;
    }

    useEffect(() => {
        fetch(`/banner-api?destination=${destinationName}`).then((res) =>
            res.json().then((data: BannerAPI[]) => {
                setCover(data[0].CoverUrl);
                console.log(data)
                console.log()
            })
        );
    }, [destinationName]);

    let formattedDestination = capitalise(destinationName)

    const attrTab = <>
            <Attractions tabName={'Attractions'} destinationName={formattedDestination} />
        </>

    const foodTab = <>
        <Food tabName={'Restaurants'} destinationName={formattedDestination}/>
    </>

    const accomTab = <>
        <Accommodations tabName={'Accommodations'} destinationName={formattedDestination} />
    </>

    const guidesTab = <>
        <Guides tabName={'Travel Tips'} destinationName={formattedDestination} countryImgUrl={cover}/>
    </>

    return (
        <body className="home">
            <ExploreBanner
                coverUrl={cover}
                destinationName={formattedDestination}
            />
            <Container
                width="70%"
                height={"100%"}
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

                <AnalyticsSection destinationName={formattedDestination}/>

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
