import React from 'react';
import {
  Circle,
  Container,
  Facebook,
  Flex,
  Google,
  Instagram,
  Right,
} from './style';

const CarouselItem = () => {
  return (
    <Container>
      <Circle />
      <Right>
        <Right.Title>Abdurashid Ibaydullaev</Right.Title>
        <Right.Text>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam,
          nonummy laoreet dolore sit magna.
        </Right.Text>
        <Flex>
          <Google />
          <Facebook />
          <Instagram />
        </Flex>
      </Right>
    </Container>
  );
};

export default CarouselItem;
