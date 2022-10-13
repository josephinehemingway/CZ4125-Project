import React from 'react';
import {RowContainer} from "../Styles";

const TikTokSection = () => {
    return (
      <div style={{width: '100%'}}>
          <RowContainer  height={'3rem'} align='center' justify={'space-between'} margintop={'1rem'} >
              <h3 className='sectiontitle'>Explore Popular TikToks</h3>
              <p className='seemore'> See More {'>'}  </p>
          </RowContainer>
      </div>
    );
};

export default TikTokSection;