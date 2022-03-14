import React from 'react';
import Anchor from '../../Generic';
import { Container, Title, Text, Button, Wrapper } from './style';

export const Header = () => {
  return (
    <Container.Back>
      <Container id='section1'>

        <Wrapper.CoupleBlock>
          <div>

            <Title>
              Cargo <span>Prime</span>
            </Title>

            <Text>
              WE’VE GOT THE TRANSPORTATION SOLUTIONS TO MEET YOUR NEEDS. OUR
              BUSINESS IS BUILT ON TRUSTWORTHY RELATIONSHIPS. THAT IS HOW WE
              DELIVER MAXIMUM VALUE AND EXCEPTIONAL SERVICE EVERY TIME!
            </Text>

            <Button>Diriver Apllication</Button>
            <Button>Call a recruter</Button>
          </div>

        </Wrapper.CoupleBlock>

        <Wrapper.CoupleBlockimg top='60' >
          <Wrapper.RightImg />
        </Wrapper.CoupleBlockimg>


      <Wrapper>
        <Anchor href='#section2' mt='-100' mbm='-70' />
      </Wrapper>
      </Container>
    </Container.Back>
  );
};
export default Header;
