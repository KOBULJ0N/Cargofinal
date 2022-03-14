import React from 'react';
import {
  Amazon,
  Card,
  Container,
  Employee,
  Fedex,
  Hubgroup,
  Hunt,
  Landstar,
  Partner,
  Partner2,
  Pepsi,
  Silchuk,
  Story,
  Truck,
  Main,
} from './style';

import CountUp from 'react-countup';
import Anchor from '../Generic';

const Settings = () => {
  return (
    <Container>
      <Main id='section5'>
        <Card.WrapperMain>
          <Card.Wrapper>

            
            <Card>
              <CountUp start={0} end={300} delay={0}>
                {({ countUpRef }) => (
                  <Card.Title>
                    <span ref={countUpRef} />+
                  </Card.Title>
                )}
              </CountUp>
              <Truck />
              <Card.Text>TRUCKS ON THE ROAD</Card.Text>
            </Card>

            
            <Card>
              <CountUp start={0} end={15} delay={0}>
                {({ countUpRef }) => (
                  <Card.Title>
                    <span ref={countUpRef} />+
                  </Card.Title>
                )}
              </CountUp>
              <Story />
              <Card.Text>YEARS ON MARKET</Card.Text>
            </Card>

            
            <Card>
              <CountUp start={0} end={400} delay={0}>
                {({ countUpRef }) => (
                  <Card.Title>
                    <span ref={countUpRef} />+
                  </Card.Title>
                )}
              </CountUp>
              <Employee />
              <Card.Text>EMPLOYEES</Card.Text>
            </Card>


          </Card.Wrapper>
        </Card.WrapperMain>
        <Anchor href='#section6' />
      </Main>

      <Partner>
        <Partner.Title>PARTNERS WHO WORKS WITH US</Partner.Title>
        <Partner.Icons>
          <Partner.Icon>
            <Amazon />
          </Partner.Icon>
          <Partner.Icon>
            <Partner2 />
          </Partner.Icon>
          <Partner.Icon>
            <Fedex />
          </Partner.Icon>
          <Partner.Icon>
            <Silchuk />
          </Partner.Icon>
        </Partner.Icons>
        <Partner.Icons>
          <Partner.Icon>
            <Pepsi />
          </Partner.Icon>
          <Partner.Icon>
            <Landstar />
          </Partner.Icon>
          <Partner.Icon>
            <Hubgroup />
          </Partner.Icon>
        </Partner.Icons>
        <Partner.Icons>
          <Partner.Icon>
            <Hunt />
          </Partner.Icon>
        </Partner.Icons>
      </Partner>
    </Container>
  );
};

export default Settings;
