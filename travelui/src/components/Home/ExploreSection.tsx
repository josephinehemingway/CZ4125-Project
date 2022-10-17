import React from "react";
import {
    RowContainer,
    HorizontalScroll,
    StyledLink,
    StyledSectionTitle,
} from "../reusable/Styles";
import CityCard from "../reusable/Cards/Cities";
import { DESTINATIONS_LIST } from "../../utils/const";
import { Link } from "react-router-dom";

const ExploreSection = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    const cityCardsArray = DESTINATIONS_LIST.map((d) => (
        <Link to={d.link}>
            <CityCard
                key={d.id}
                onClick={scrollToTop}
                url={d.imgUrl}
                cityName={d.cityName}
            />
        </Link>
    ));

    return (
        <div style={{ width: "100%" }}>
            <RowContainer
                height={"3rem"}
                align="center"
                justify={"space-between"}
                margintop={"1rem"}
            >
                <StyledSectionTitle>
                    Explore Popular Destinations
                </StyledSectionTitle>
                <StyledLink
                    href="https://www.tiktok.com/search?q=travel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See More {">"}
                </StyledLink>
            </RowContainer>
            <HorizontalScroll>{cityCardsArray}</HorizontalScroll>
        </div>
    );
};

export default ExploreSection;
