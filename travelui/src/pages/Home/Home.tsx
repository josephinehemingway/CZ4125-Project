import React, { useState, useRef } from "react";
import "../Pages.css";
import { Container, StyledSearch, StyledSectionTitle } from "../../components/reusable/Styles";
import HomeBanner from "../../components/Home/HomeBanner";
import ExploreSection from "../../components/Home/ExploreSection";
import TikTokSection from "../../components/reusable/TikTok/TikTokSection";
import Logo from "../../assets/images/Logo.png";
import Plane from "../../assets/images/Plane-black.png";
import { TIKTOK_LIST } from "../../utils/const";

const Home: React.FC = () => {
  const [destination, setDestination] = useState<string>("");
  const onSearch = (destination: string) => {
    setDestination(destination);
    console.log(destination);
  };

  const exploreRef = useRef<HTMLDivElement>(null);

  const onClick = () => {
    const node: any = exploreRef.current;
    window.scrollTo({
      top: node.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <body className="home">
      <HomeBanner onClick={onClick} />
      <Container
        ref={exploreRef}
        align="center"
        width="70%"
        paddingbottom={'1.5rem'}
        paddingtop={"4rem"}
      >
        <img
          src={Logo}
          width={"60vw"}
          alt=""
          style={{ marginBottom: "1rem" }}
        />
        <StyledSectionTitle>Where shall we explore today?</StyledSectionTitle>
        <StyledSearch
          width={"75%"}
          suffix={<img src={Plane} height={"20rem"} alt="" />}
          placeholder="Search Destinations"
          value={destination === "" ? undefined : destination}
          onChange={(e: { target: { value: any } }) => onSearch(e.target.value)}
          allowClear
        />
        <ExploreSection />
        <TikTokSection TikTokList={TIKTOK_LIST}/>
      </Container>
    </body>
  );
};

export default Home;
