import React from "react";
import "../Pages.css";
import { Container } from "../../components/reusable/Styles";
import { useLocation } from "react-router-dom";
import ExploreBanner from "../../components/Explore/ExploreBanner";
import London from "../../assets/images/London.jpeg";
// import TikTokSection from "../../components/reusable/TikTok/TikTokSection";

const Explore: React.FC = ({}) => {
  const destinationName = useLocation().pathname.split("/")[2];

  return (
    <body className="home">
      <ExploreBanner coverUrl={London} destinationName={destinationName} />
      <Container
        align="center"
        width="70%"
        height={"155vh"}
        paddingtop={"4rem"}
      >
        hello
      </Container>
    </body>
  );
};

export default Explore;
