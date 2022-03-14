import React from 'react';
import Carousel from 'react-elastic-carousel';
import CarouselItem from '../../Generic/CarouselItem';
import { AboutUs } from './style';
import './style';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 3 },
];

export const Carusel = () => {
  return (
    <AboutUs>
      <AboutUs.Title>WHAT PEOPLE THINK ABOUT US</AboutUs.Title>
      <Carousel breakPoints={breakPoints}>
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </AboutUs>
  );
};
export default Carusel;
