/** @format */

import styled from 'styled-components';
import group from '../../../assets/images/background.png';
import whiteTruck from '../../../assets/images/whiteTruck.png';

export const Container = styled.div`
	height: 1049px;
	margin-top: 62px;
	display: grid;
	grid-template-columns: 11vw 1fr 1fr;
	grid-template-rows: 1fr 100px;
	padding-top: 80px;
	align-items: start;

	@media only screen and (max-width: 1000px) {
		width: 100%;
		margin-top: 0;
		padding-left: 0;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 1fr;
		background-image: none;
		background-size: none;
		padding-bottom: 80px;
	}
`;

Container.Back = styled.div`
	background-image: url(${group});
	background-size: 100% 100%;
	@media only screen and (max-width: 1000px) {
		background-image: none;
		background-size: none;
	}
`;
export const Wrapper = styled.div`
	grid-column: 1/4;
	@media only screen and (max-width: 1000px) {
		grid-column: 1/1;
	}
`;

export const Title = styled.p`
	text-transform: uppercase;
	text-shadow: 7px 7px 10px rgba(0, 0, 0, 0.2);
	font-size: 150px;
	color: red;
	line-height: 180px;
	span {
		color: #47abd8;
	}
	@media only screen and (max-width: 1000px) {
		margin: 0;
		padding: 0;
		text-transform: uppercase;
		text-shadow: 7px 7px 10px rgba(0, 0, 0, 0.2);
		font-size: 64px;
		color: red;
		line-height: 100px;
		text-align: center;
		span {
			color: #47abd8;
		}
	}
`;

export const Text = styled.div`
	font-family: Poppins;
	font-style: normal;
	font-weight: 300;
	font-size: 20px;
	line-height: 30px;
	max-width: 633px;
	color: #4f4f4f;
	@media only screen and (max-width: 1000px) {
		font-size: 14px;
		line-height: 21px;
		text-align: center;
		color: #4f4f4f;
		max-width: 300px;
		margin: 20px auto;
	}
`;

export const Button = styled.button`
	border-radius: 50px;
	font-size: 22.422px;
	font-weight: 600;
	border: none;
	outline: none;
	padding: 8px 8px;
	margin-right: 15px;
	margin-top: 60px;
	color: #ff4242;
	background: #fff;
	cursor: pointer;
	white-space: nowrap;
	transition: all 0.1s;
	:hover {
		color: #fff;
		background: linear-gradient(90deg, #47abd8 0%, #0071bc 100%);
		box-shadow: 7px 7px 18px rgba(0, 0, 0, 0.3);
	}
	@media only screen and (max-width: 1000px) {
		width: 66%;
		margin: 10px auto;
		border-radius: 50px;
		border: none;
		outline: none;
		padding: 8px 8px;
		color: #ff4242;
		background: #fff;
		cursor: pointer;
		white-space: nowrap;
		transition: all 0.1s;
		font-weight: 700;
		text-align: center;
		font-size: 16px;
		line-height: 24px;
		display: block;
		:hover {
			color: #fff;
			background: linear-gradient(90deg, #47abd8 0%, #0071bc 100%);
			box-shadow: 7px 7px 18px rgba(0, 0, 0, 0.3);
		}
	}
`;

Wrapper.CoupleBlock = styled.div`
	grid-column: 2/3;
	width: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
	margin-top: ${({ top }) => (top ? top : '0')}px;
	@media only screen and (max-width: 1000px) {
		margin: 0;
		grid-column: 1/2;
	}
`;

Wrapper.CoupleBlockimg = styled.div`
	grid-column: 3/4;
	width: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
	margin-top: ${({ top }) => (top ? top : '0')}px;
	@media only screen and (max-width: 1000px) {
		margin: 0;
		grid-column: 1/2;
	}
`;
Wrapper.RightImg = styled.img.attrs({
	src: `${whiteTruck}`,
})`
	width: 90%;
`;
