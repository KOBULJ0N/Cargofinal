import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Carusel from '../components/pages/Carusel';
import Footer from '../components/pages/Footer';
import Header from '../components/pages/Header';
import InputBlcok from '../components/pages/Input/index';
import MapForm from '../components/pages/Map';
import Ourservices from '../components/pages/OurServices';
import OurStory from '../components/pages/OurStory';
import WhyPeopleChooseUs from '../components/pages/WhyPeopleChooseUs';
import Settings from '../components/Settings';
import Sidebar from '../components/Sidebar';
import Block from './style';

export const Root = () => {
  const [count, setCount] = useState(0);
  window.addEventListener('scroll', () => {
    setCount(window.scrollY);
  });

  return (
    <Block.Main>
      {count < 4000 && <Sidebar />}
      <Sidebar />
      <Block>
        <Navbar />
      </Block>
      <Header />
      <OurStory />
      <Ourservices />
      <WhyPeopleChooseUs />
      <Settings />
      <Carusel />
      <InputBlcok />
      <MapForm />

      <Footer />
    </Block.Main>
  );
};
export default Root;
