import React from 'react';
import {RowContainer} from "../reusable/Styles";

const ExploreSection = () => {
    return (
      <div style={{width: '100%'}}>
          <RowContainer justify={'space-between'} margintop={'1rem'}>
              <h3 className='sectiontitle'>Explore Popular Destinations</h3>
              <p className='seemore'> See More {'>'}  </p>
          </RowContainer>
      </div>
    );
};

export default ExploreSection;