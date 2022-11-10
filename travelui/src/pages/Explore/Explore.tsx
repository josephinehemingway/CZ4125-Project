import React from "react";
import "../Pages.css";
import { Container, StyledPageTitle, StyledTabs } from "../../components/reusable/Styles";
import { Link, useLocation } from "react-router-dom";
import ExploreBanner from "../../components/Explore/ExploreBanner";
import London from "../../assets/images/London.jpeg";
import { Breadcrumb } from "antd";
// import TikTokSection from "../../components/reusable/TikTok/TikTokSection";

const {TabPane} = StyledTabs

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

                <StyledTabs
                    size={'large'}
                    defaultActiveKey="1"
                    tabBarGutter={50}
                    tabBarStyle={{fontFamily: 'Poppins-Medium'}}
                >
                    <TabPane tab="Attractions" key="1">
                         dump attractions here
                    </TabPane>
                    <TabPane tab="Food" key="2">
                        dump food here
                    </TabPane>
                    <TabPane tab="Accommodations" key="3">
                        dump accoms here
                    </TabPane>
                    <TabPane tab="Guides" key="4">
                        dump guides here
                    </TabPane>
                </StyledTabs>
            </Container>
        </body>
    );
};

export default Explore;
