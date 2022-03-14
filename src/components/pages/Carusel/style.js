import styled from 'styled-components';

export const AboutUs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 55px 20px;
  background-color: #47abd8;
`;

AboutUs.Title = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 45px;
  color: #fff;
  margin-bottom: 37px;

  @media only screen and (max-width: 1000px) {
    font-size: 20px;
  }
`;


export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 100%;
  background-color: #00008b;
  color: #fff;
  margin: 0 15px;
  font-size: 4em;
`;