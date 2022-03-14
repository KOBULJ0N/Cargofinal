/** @format */

import styled from 'styled-components';
import { ReactComponent as truck } from '../../../assets/Icons/truck.svg';
import moreTruck from '../../../assets/images/CargoPrime.png';

import Carousel from 'react-elastic-carousel';

export const Karusel = styled(Carousel)`
  display: none;
  padding: 0 10px;
  @media only screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Block = styled.div`
  width: 100%;
  height: 700px;
  display: grid;
  padding-left: 130px;
  grid-template-columns: 1fr;
  padding-right: 130px;
  @media only screen and (max-width: 1000px) {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr;
    /* display: flex;
    flex-direction: column; */
  }
`;

Block.Right = styled.div``;
Block.RightInsetBig = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  height: 100%;
  @media only screen and (max-width: 1000px) {
    display: block;
    margin: 0 auto;
  }
`;

Block.RightInset = styled.div`
  height: 100%;
  text-align: ${({ poss }) => (poss ? poss : 'none')};
  padding: 50px 50px;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;

Block.Img = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(truck)`
  width: 119px;
  height: 57px;
  margin: 0 auto;
`;

export const Main = styled.div`
  padding-top: 70px;
  padding-bottom: 30px;
  box-shadow: 7px 7px 18px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
Main.Title = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  line-height: 60px;
  color: #4f4f4f;
  text-align: center;
  margin: 10px 0;
`;
Main.Anchor = styled.div`
  margin-top: 100px;
`;

// export const BlockCarousel = styled(Carousel)`
//   @media only screen and (min-width: 1000px) {
//     display: none;
//   }
//   width: 90%;
//   min-height: 0px;
//   margin: 0 auto;
//   .thumbs-wrapper {
//     display: none;
//   }
//   .carousel-status {
//     display: none;
//   }
//   .control-next {
//     border: 1px solid black !important;
//     background: #333 !important;
//     height: 100px !important;
//     margin-top: 50px !important;
//   }
//   .control-prev {
//     border: 1px solid black !important;
//     background: #333 !important;
//     height: 100px !important;
//     margin-top: 50px !important;
//   }
//   .carousel-root {
//     height: 30px !important;
//   }
//   .control-dots {
//     display: none;
//   }
// `;

Block.CaruselMain = styled.div`
  width: 100%;
  height: 100%;
`;
Block.CaruselText = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #000000;
  padding-bottom: 50px;
  width: 95%;
  margin: 0 auto;
  @media only screen and (max-width: 1000px) {
    font-size: 12px;
  }
`;
Block.CarouselImg = styled.img.attrs({
  src: `${moreTruck}`,
})`
  display: none;
  @media only screen and (max-width: 1000px) {
    display: block;
    width: 100%;
  }
`;

export default Block;
