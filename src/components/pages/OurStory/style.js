/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1 fr;
	/* padding-right: 150px; */
	height: 800px;
	padding-left: 11vw;
	margin-top: 250px;
	@media only screen and (max-width: 1000px) {
		display: grid;
		grid-template-columns: 1fr;
		padding: 0;
		width: 100%;
		height: 600px;
		margin-top: 0;
	}
`;

export const Wrapper = styled.div`
	width: 100%;
	@media only screen and (max-width: 1000px) {
		display: grid;
		justify-content: center;
	}
`;

Container.Grid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 150px;
	@media only screen and (max-width: 1000px) {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 0px;
	}
`;

export const Title = styled.div`
	font-style: normal;
	font-weight: 500;
	font-size: 40px;
	line-height: 60px;
	color: #4f4f4f;
	text-align: center;
`;
export const Text = styled.div`
	font-family: Poppins;
	font-style: normal;
	font-weight: 300;
	font-size: 17px;
	line-height: 25px;
	max-width: 558px;
	margin-top: 15px;
	color: #4f4f4f;
	@media only screen and (max-width: 1000px) {
		width: 80%;
		font-size: 12px;
		line-height: 15px;
		text-align: center;
		margin: 0 auto;
		color: #000000;
	}
`;
export const Image = styled.img`
	cursor: pointer;
	margin-top: 70px;
	width: 100%;
	@media only screen and (max-width: 1000px) {
		margin: 0 auto;
		margin-top: 32px;
		width: 80%;
	}
`;
