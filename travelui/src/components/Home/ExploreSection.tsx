import React from 'react';
import {RowContainer, HorizontalScroll} from "../reusable/Styles";
import CityCard from "../reusable/Cards/Cities";
import {DESTINATIONS_LIST} from "../../utils/const";
import { Link } from 'react-router-dom';

const ExploreSection = () => {
    const cityCardsArray = DESTINATIONS_LIST.map(d => (
      <Link to={d.link}>
          <CityCard
            key={d.id}
            url={d.imgUrl}
            cityName={d.cityName}
          />
      </Link>
    ));

    return (
      <div style={{width: '100%'}}>
          <RowContainer height={'3rem'} align='center' justify={'space-between'} margintop={'1rem'} >
              <h3 className='sectiontitle'>Explore Popular Destinations</h3>
              <a href="https://www.tiktok.com/search?q=travel"
                 target="_blank"
                 rel="noopener noreferrer"
                 className='seemore'
              >
                See More {'>'}
              </a>
          </RowContainer>
          <HorizontalScroll>
              {cityCardsArray}
          </HorizontalScroll>
      </div>
    );
};

export default ExploreSection;