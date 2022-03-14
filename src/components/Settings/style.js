/** @format */

import styled from 'styled-components';

import { ReactComponent as employee } from '../../assets/Icons/employee.svg';
import { ReactComponent as truck } from '../../assets/Icons/truck.svg';
import { ReactComponent as story } from '../../assets/Icons/bigStory.svg';
import group from '../../assets/images/back.png';

import { ReactComponent as amazon } from '../../assets/Icons/Amazon.svg';
import { ReactComponent as partner2 } from '../../assets/Icons/partner2.svg';
import { ReactComponent as fedex } from '../../assets/Icons/fedex.svg';
import { ReactComponent as silchuk } from '../../assets/Icons/silchuk.svg';
import { ReactComponent as pepsi } from '../../assets/Icons/pepsi.svg';
import { ReactComponent as landstar } from '../../assets/Icons/landstar.svg';
import { ReactComponent as hubgroup } from '../../assets/Icons/hubgroup.svg';
import { ReactComponent as hunt } from '../../assets/Icons/hunt.svg';


	
export const Container = styled.div`
	width: 100%;
`;

Container.Curved = styled.div`
	width: 100%;
`;
export const Employee = styled(employee)`
	margin: 35px 0;
`;
export const Truck = styled(truck)`
	margin: 35px 0;
`;
export const Story = styled(story)`
	margin: 35px 0;
`;

export const Card = styled.div`
	padding: 27px 34px;
	width: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	background-color: var(--colorWhite);
	margin: 0 auto;
`;

Card.Wrapper = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-content: center;
	align-items: center;
	margin-top: 103px;
	margin-bottom: 93px;
	margin: 0 auto;
	@media only screen and (max-width: 1000px) {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr 1r;
	}
`;
Card.WrapperMain = styled.div`
	width: 85%;
	margin: 0 auto;
`;
Card.Title = styled.div`
	font-style: normal;
	font-weight: normal;
	font-size: 82.459px;
	line-height: 124px;
	color: #47abd8;
`;
Card.Text = styled.div`
	font-style: normal;
	font-weight: normal;
	font-size: 21.443px;
	line-height: 32px;
	color: #47abd8;
`;

export const Partner = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	min-height: 86.2vh;
	padding: 8% 0;
	flex-wrap: wrap;
`;

Partner.Title = styled.div`
	font-style: normal;
	font-weight: normal;
	font-size: 30px;
	line-height: 45px;
	color: #808080;
	margin-bottom: 60px;
`;

export const Amazon = styled(amazon)``;
export const Partner2 = styled(partner2)``;
export const Fedex = styled(fedex)``;
export const Silchuk = styled(silchuk)``;
export const Pepsi = styled(pepsi)``;
export const Landstar = styled(landstar)``;
export const Hubgroup = styled(hubgroup)``;
export const Hunt = styled(hunt)``;

Partner.Icons = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	
`;

Partner.Icon = styled.div`
	width: fit-content;
	margin: 0 50px;
	@media only screen and (max-width: 1000px) {
	width: 120px;}
`;

export const AboutUs = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	/* height: 55vh; */
	height: fit-content;
	padding: 8% 0;
	background-color: #47abd8;
`;

AboutUs.Title = styled.div`
	font-style: normal;
	font-weight: normal;
	font-size: 30px;
	line-height: 45px;
	color: var(--colorWhite);
	margin-bottom: 37px;
`;

export const Main = styled.div`
	width: 100%;
	height: 900px;
	display: grid;
	background-image: url(${group});
	background-size: 100% 100%;
	padding-bottom: 150px;
	padding-top: 80px;

	@media only screen and (max-width: 1000px) {
		background-image: none;
		background-size: none;
		height: 1400px;

	}
`;
