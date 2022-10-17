import React from "react";
import "../Pages.css";
import { Container, StyledPageTitle } from "../../components/reusable/Styles";
import { Link, useLocation } from "react-router-dom";
import ExploreBanner from "../../components/Explore/ExploreBanner";
import London from "../../assets/images/London.jpeg";
import { Breadcrumb, Tabs } from "antd";
// import TikTokSection from "../../components/reusable/TikTok/TikTokSection";

const Explore: React.FC = () => {
    const countryName = useLocation().pathname.split("/")[2];
    const destinationName = useLocation().pathname.split("/")[3];

    return (
        <body className="home">
            <ExploreBanner
                coverUrl={London}
                destinationName={destinationName}
            />
            <Container
                width="70%"
                height={"155vh"}
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
                    defaultActiveKey="1"
                    size="large"
                    tabBarGutter={50}
                    tabBarStyle={{ fontFamily: "Poppins-Medium" }}
                    items={[
                        {
                            label: `Attractions`,
                            key: '1',
                            children: ` Attractions Tab`,
                        },
                        {
                            label: `Food`,
                            key: '2',
                            children: `Food Tab`,
                        },
                        {
                            label: `Accommodations`,
                            key: '3',
                            children: `Accommodations Tab`,
                        },
                        {
                            label: `Guides`,
                            key: '4',
                            children: `Guides Tab`,
                        },
                    ]}
                />
            </Container>
        </body>
    );
};

export default Explore;
