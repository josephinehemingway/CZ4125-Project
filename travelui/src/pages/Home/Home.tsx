import React from 'react';
import HomeBanner from '../../components/Home/HomeBanner';
import { Container } from '../../components/reusable/Styles';
import './Home.css';
import Footer from "../../components/reusable/Footer";

const Home = () => {

  return (
    <body className="home">
    <HomeBanner />
    <Container>
      <Container align='flex-start' width='70%' >

      </Container>
    </Container>
    <Footer />
    </body>
  );
}

export default Home;