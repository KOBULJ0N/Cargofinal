import styled from 'styled-components';
import { ReactComponent as instagram } from '../../../assets/Icons/instagramm.svg';
import { ReactComponent as facebook } from '../../../assets/Icons/facebook2.svg';
import { ReactComponent as google } from '../../../assets/Icons/google.svg';

export const Container = styled.div`
  /* width: 380px; */

  display: flex;
  background-color: #fff;
  padding: 40px 20px;
  border-radius: 30px;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    /* padding: 17px; */
    height: auto;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
}
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 13px;
`;

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 10px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(90deg, #47abd8 0%, #0071bc 100%);
`;

Right.Title = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 16.559px;
  line-height: 25px;

  @media only screen and (max-width: 1000px) {
    font-size: 14px;
  }
`;

Right.Text = styled.div`
	font-weight: 300;
	font-style: normal;
	width: 235px;
	font-size: 15.559px;
	line-height: 25px;
	color: #000000;
	margin: 9px 0;
	@media only screen and (max-width: 1000px) {
		font-size: 13px;
		width: 100%;
		line-height: 18px;
	}
`;

export const Instagram = styled(instagram)`
  width: 27px;
  height: 27px;
  path {
    fill: #222221;
  }
`;
export const Facebook = styled(facebook)`
  width: 27px;
  height: 27px;
  path {
    fill: #222221;
  }
`;
export const Google = styled(google)`
  path {
    fill: #222221;
  }
  width: 27px;
  height: 27px;
`;
