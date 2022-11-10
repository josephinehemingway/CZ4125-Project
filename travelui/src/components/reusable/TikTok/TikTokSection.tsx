import React from "react";
import {
    RowContainer,
    HorizontalScroll,
    StyledLink,
    StyledText,
    StyledSectionTitle,
} from "../Styles";
import { TIKTOK_INTERFACE } from "../../../utils/const";
import "./TikTok.css";

type Props = {
    TikTokList: TIKTOK_INTERFACE[];
    title?: string;
};

const TikTokSection: React.FC<Props> = ({ TikTokList, title}) => {
    const tiktokArray = TikTokList.map((t) => (
        <div key={t.id} className={"tiktok"}>
            <iframe
                title={t.id}
                src={`https://www.tiktok.com/embed/${t.embedUrl}`}
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
                margintop={"1rem"}
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
            <HorizontalScroll height={"38rem"}>{tiktokArray}</HorizontalScroll>
        </div>
    );
};

export default TikTokSection;
