import React from 'react';
import {RowContainer, StyledLink, StyledSectionTitle} from '../../reusable/Styles';
import '../explorestyles.css';
import {ATTRACTION_LIST} from "../../../utils/const";
import {Link} from "react-router-dom";
import AttractionsCard from "../../reusable/Cards/AttractionsCard";

type Props = {
    tabName: string;
    destinationName: string;
};

//this component will be used for attractions and food section

const Attractions: React.FC<Props>= ({ tabName, destinationName }) => {
    // here we will pass in the destination, tiktoks, list of attractions

    const attrCardsArray = ATTRACTION_LIST.map((d) => (
        <Link key={d.id} to={d.link}>
            <AttractionsCard
                // onClick={scrollToTop}
                url={d.imgUrl}
                attrName={d.name}
            />
        </Link>
    ));

    return (
        <div>
            <RowContainer
                height={"3rem"}
                align="center"
                justify={"space-between"}
                margintop={"1rem"}
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
            <div className={'explore-gallery'}>

                <div className='explore-subgallery'>
                    {attrCardsArray}
                </div>
                <div style={{width: '30%', background: 'black', color: 'white'}}>
                    map
                </div>
            </div>

        </div>
    );
};

export default Attractions;