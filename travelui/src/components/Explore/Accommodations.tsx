import React from 'react';
import {HorizontalScroll, RowContainer, StyledLink, StyledSectionTitle, StyledSubSubheading} from '../reusable/Styles';
import './explorestyles.css';
import {ATTRACTION_LIST} from "../../utils/const";
import {Link} from "react-router-dom";
import AccomsCard from "../reusable/Cards/AccomsCard";

type Props = {
    tabName: string;
    destinationName: string;
};

//this component will be used for attractions and food section

const Accommodations: React.FC<Props>= ({ destinationName }) => {
    // here we will pass in the destination, tiktoks, list of attractions
    const attrCardsArray = ATTRACTION_LIST.map((d) => (
        <Link key={d.id} to={d.link}>
            <AccomsCard
                // onClick={scrollToTop}
                url={d.imgUrl}
                name={d.name}
            />
        </Link>
    ));

    return (
        <div style={{marginBottom: '3rem'}}>
            <RowContainer
                height={"3rem"}
                align="center"
                justify={"space-between"}
                margintop={"1rem"}
            >
                <StyledSectionTitle> Accommodations in {destinationName} </StyledSectionTitle>
            </RowContainer>

            <RowContainer
                height={"3rem"}
                align="center"
                justify={"space-between"}
                margintop={"1rem"}
            >
                <StyledSubSubheading>
                    Hotels
                </StyledSubSubheading>
                <StyledLink
                    href="https://www.tiktok.com/search?q=travel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See More {">"}
                </StyledLink>
            </RowContainer>
            <HorizontalScroll height={'100%'}>
                {attrCardsArray}
            </HorizontalScroll>

            <RowContainer
                height={"3rem"}
                align="center"
                justify={"space-between"}
                margintop={"1rem"}
            >
                <StyledSubSubheading>
                    Airbnbs
                </StyledSubSubheading>
                <StyledLink
                    href="https://www.tiktok.com/search?q=travel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See More {">"}
                </StyledLink>
            </RowContainer>
            <HorizontalScroll height={'100%'}>
                {attrCardsArray}
            </HorizontalScroll>

            <RowContainer
                height={"3rem"}
                align="center"
                justify={"space-between"}
                margintop={"3rem"}
            >
                <StyledSectionTitle>
                    Map
                </StyledSectionTitle>
            </RowContainer>

        </div>
    );
};

export default Accommodations;