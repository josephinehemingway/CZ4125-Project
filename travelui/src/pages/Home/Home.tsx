import React, {useState, useRef} from 'react';
import HomeBanner from '../../components/Home/HomeBanner';
import {Container, StyledSearch} from '../../components/reusable/Styles';
import './Home.css';
import Footer from "../../components/reusable/Footer";
import Logo from "../../assets/images/Logo.png";
import {SearchOutlined} from "@ant-design/icons";
import ExploreSection from "../../components/Home/ExploreSection";
import TikTokSection from "../../components/reusable/TikTokSection";

const Home = () => {
  const [destination, setDestination] = useState<string>("");
  const onSearch = (destination: string) => setDestination(destination);

  const exploreRef = useRef<HTMLDivElement>(null)

  const onClick = () => {
    const node: any = exploreRef.current
    window.scrollTo({
      top: node.offsetTop,
      left: 0,
      behavior: "smooth",
    })
  };

  return (
    <body className="home">
    <HomeBanner onClick={onClick}/>
    <Container>
      <Container  ref={exploreRef}  align='center' width='70%' height={'100vh'} paddingtop={'4rem'} >
        <img src={Logo} width={"60vw"} alt="" />
        <h3 className="sectiontitle">Where shall we explore today?</h3>
        <StyledSearch
          width={'75%'}
          suffix={<SearchOutlined />}
          placeholder="Search Destinations"
          value={destination === "" ? undefined : destination}
          onChange={(e: { target: { value: any } }) =>
            onSearch(e.target.value)
          }
          allowClear
        />
        <ExploreSection />
        <TikTokSection />
      </Container>
    </Container>
    <Footer />
    </body>
  );
}

export default Home;