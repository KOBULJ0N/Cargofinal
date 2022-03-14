/** @format */

import styled from 'styled-components';

import { ReactComponent as arrow } from '../../assets/Icons/arrow.svg';

export const Scroll = styled(arrow)`
	width: 36px;
	height: 44px;
`;

export const AnchorContainer = styled.a`
	display: flex;
	justify-content: center;
	@media only screen and (min-width: 1000px) {
		margin-top: ${({ mt }) => (mt ? mt : 0)}px;
		margin-bottom: ${({ mb }) => (mb ? mb : 0)}px;
	}
	@media only screen and (max-width: 1000px) {
		margin-top: ${({ mtm }) => (mtm ? mtm : 0)}px;
		margin-bottom: ${({ mbm }) => (mbm ? mbm : 0)}px;
	}
`;
