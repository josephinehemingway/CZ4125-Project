import React from "react";
import {
    RowContainer,
    HorizontalScroll,
    StyledLink,
    StyledText,
    StyledSectionTitle,
} from "../Styles";
import "./TikTok.css";

interface TikTokAttractions{
    Id: string,
    TiktokUrl: string
}

type Props = {
    TikTokList: TikTokAttractions[];
    title?: string;
};

const TikTokSection: React.FC<Props> = ({ TikTokList, title}) => {
    const tiktokArray = TikTokList.map((t, index) => (
        <div key={index} className={"tiktok"}>
            <iframe
                title={t.Id}
                src={t.TiktokUrl}
                className="tiktok-iframe"
                allow="encrypted-media;"
            ></iframe>
        </div>
    ));

    return (
        <div style={{ width: "100%" }}>
            <RowContainer
                height={"3rem"}
                align="center"
                justify={"space-between"}
                margintop={"2rem"}
            >
                {title ?
                    <StyledSectionTitle>{title}</StyledSectionTitle>
                    : <StyledSectionTitle>Explore Popular TikToks</StyledSectionTitle>
                }
                <StyledLink
                    href="https://www.tiktok.com/search?q=travel"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See More {">"}
                </StyledLink>
            </RowContainer>
            <StyledText>
                Need some inspiration for your next destination? Check out these
                trending TikToks!
            </StyledText>
            <HorizontalScroll height={"38rem"}>
                {tiktokArray}
            </HorizontalScroll>
        </div>
    );
};

export default TikTokSection;
