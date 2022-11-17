import React from 'react';
import {HorizontalScroll, RowContainer, StyledLink, StyledSectionTitle} from '../reusable/Styles';
import './explorestyles.css';
import {ATTRACTION_LIST} from "../../utils/const";
import {Link} from "react-router-dom";
import GuidesCard from "../reusable/Cards/GuidesCard";

type Props = {
    tabName: string;
    destinationName: string;
};

const Guides: React.FC<Props>= ({ tabName, destinationName }) => {
    const guideCardsArray = ATTRACTION_LIST.map((d) => (
        <Link key={d.id} to={d.link}>
            <GuidesCard
                imgurl={d.imgUrl}
                attrName={d.name}
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
                marginbottom={'1rem'}
            >
                <StyledSectionTitle>
                    Explore Top {tabName} in {destinationName}
                </StyledSectionTitle>
                <StyledLink
                    href="https://www.tiktok.com/search?q=travel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See More {">"}
                </StyledLink>
            </RowContainer>
            <HorizontalScroll height={'100%'}>
                {guideCardsArray}
            </HorizontalScroll>

        </div>
    );
};

export default Guides;