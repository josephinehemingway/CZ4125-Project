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
import {scrollToTop} from "../../utils/helperfunctions";

const ExploreSection: React.FC = () => {

    const cityCardsArray = DESTINATIONS_LIST.map((d) => (
        <Link key={d.id} to={d.link}>
            <CityCard
                onClick={scrollToTop}
                url={d.imgUrl}
                cityName={d.name}
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
