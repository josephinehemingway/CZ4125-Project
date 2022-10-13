import React from "react";
import { RowContainer, HorizontalScroll } from "../Styles";
import {TIKTOK_INTERFACE} from "../../../utils/const";

type Props = {
  TikTokList: TIKTOK_INTERFACE[];
};

const TikTokSection: React.FC<Props> = ({TikTokList}) => {
  const tiktokArray = TikTokList.map((t) => (
    <div className={"tiktok"}>
      <iframe
        key={t.id}
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
        <h3 className="sectiontitle">Explore Popular TikToks</h3>
        <a href="https://www.tiktok.com/search?q=travel"
           target="_blank"
           rel="noopener noreferrer"
           className='seemore'
        >
          See More {'>'}
        </a>
      </RowContainer>
      <h3 className="dark-subtitle">
        Need some inspiration for your next destination? Check out these trending TikToks!
      </h3>
      <HorizontalScroll height={'38rem'}>
        { tiktokArray }
      </HorizontalScroll>
    </div>
  );
};

export default TikTokSection;
