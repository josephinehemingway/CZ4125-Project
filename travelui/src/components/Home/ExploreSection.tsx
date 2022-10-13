import React from 'react';
import {RowContainer, HorizontalScroll} from "../reusable/Styles";
import CityCard from "../reusable/Cards/Cities";

const ExploreSection = () => {
    return (
      <div style={{width: '100%'}}>
          <RowContainer height={'3rem'} align='center' justify={'space-between'} margintop={'1rem'} marginbottom={'1rem'}>
              <h3 className='sectiontitle'>Explore Popular Destinations</h3>
              <p className='seemore'> See More {'>'}  </p>
          </RowContainer>
          <HorizontalScroll>
              <CityCard url={require('../../assets/images/London.jpeg')} cityName={'London, UK'}/>
              <CityCard url={require('../../assets/images/Paris.jpeg')} cityName={'Paris, France'}/>
              <CityCard url={require('../../assets/images/Rome.jpeg')} cityName={'Rome, Italy'}/>
              <CityCard url={require('../../assets/images/London.jpeg')} cityName={'London, UK'}/>
          </HorizontalScroll>



      </div>
    );
};

export default ExploreSection;