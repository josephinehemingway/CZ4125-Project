import React from "react";
import "../Pages.css";
import { Container } from "../../components/reusable/Styles";
import {Link, useLocation} from "react-router-dom";
import ExploreBanner from "../../components/Explore/ExploreBanner";
import London from "../../assets/images/London.jpeg";
import {Breadcrumb} from "antd";
// import TikTokSection from "../../components/reusable/TikTok/TikTokSection";

const Explore: React.FC = ({}) => {
  const destinationName = useLocation().pathname.split("/")[2];

  return (
    <body className="home">
      <ExploreBanner coverUrl={London} destinationName={destinationName} />
      <Container
        width="70%"
        height={"155vh"}
        paddingtop={"2rem"}
        align='flex-start'
      >
        <Breadcrumb style={{fontSize: '20px'}}>
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/">Explore</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>{destinationName}</Breadcrumb.Item>
        </Breadcrumb>
      </Container>
    </body>
  );
};

export default Explore;
