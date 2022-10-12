import React from 'react';
import '../styles.css'
import Cover from '../../assets/images/kayak.png'
import Logo from '../../assets/images/Logo.png'
// import { StyledButton } from '../reusable/Button';
import { Container } from '../reusable/Styles';


const HomeBanner = () => {
  return (
    <header>
      <div className="head-text">
        <div className="head-image">
          <img src={Cover} height={'100%'} width={'100%'} alt = ""/>
        </div>
        <div className='text-on-image'>
          <img src={Logo} width={'60vw'} alt = ""/>
          <h3 className="title">Too busy to plan your trips?</h3>
          <h3 className="subtitle">Grab ‘n’ go an itinerary for your next destination with us!</h3>
          <Container align={'flex-start'}>
            {/*<StyledButton>*/}
            {/*  Explore*/}
            {/*</StyledButton>*/}
          </Container>
        </div>
      </div>
    </header>
  );
}

export default HomeBanner

