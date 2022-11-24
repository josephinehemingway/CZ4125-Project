import React, {useRef, useState} from "react";
import "../Pages.css";
import {Container, StyledInputSearch, StyledSectionTitle} from "../../components/reusable/Styles";
import HomeBanner from "../../components/Home/HomeBanner";
import ExploreSection from "../../components/Home/ExploreSection";
import TikTokSection from "../../components/reusable/TikTok/TikTokSection";
import Logo from "../../assets/images/Logo.png";
import Plane from "../../assets/images/Plane-black.png";
import {TIKTOK_LIST} from "../../utils/const";
import {useNavigate} from "react-router-dom";
import {scrollToTop} from "../../utils/helperfunctions";


const Home: React.FC = () => {
    const [destination, setDestination] = useState<string>("");
    let navigate = useNavigate();

    const navigateToExplore = () =>{
        let path = `explore/${destination}`;
        navigate(path);
    }

    const onSearch = () => {
        console.log(destination);
        navigateToExplore()
        scrollToTop()
    };

    const exploreRef = useRef<HTMLDivElement>(null);

    const onClickExplore = () => {
        const node: any = exploreRef.current;
        window.scrollTo({top: node.offsetTop, left: 0, behavior: "smooth"});
    };

    return (
        <body className="home">
        <HomeBanner onClickExplore={onClickExplore} />
        <Container
            ref={exploreRef}
            align="center"
            width="70%"
            paddingbottom={"1.5rem"}
            paddingtop={"4rem"}
        >
            <img
                src={Logo}
                width={"60vw"}
                alt=""
                style={{marginBottom: "1rem"}}
            />
            <StyledSectionTitle>Where shall we explore today?</StyledSectionTitle>

            <StyledInputSearch
                col={'black'}
                width={"75%"}
                suffix={<img
                    onClick={onSearch}
                    src={Plane} height={"20rem"} alt=""
                />}
                placeholder="Search Destinations"
                value={destination === "" ? undefined : destination}
                onChange={(e: { target: { value: any } }) => setDestination(e.target.value)}
                allowClear
            />
            <ExploreSection/>
            {/* <TikTokSection TikTokList={TIKTOK_LIST}/> */}
        </Container>
        </body>
    );
};

export default Home;
