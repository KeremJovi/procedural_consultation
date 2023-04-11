import styled from 'styled-components';

import { Link as RouterLink } from 'react-router-dom';

export const Link = styled(RouterLink)`
	text-decoration: none;
`;

export const CardContainer = styled.div`
	background-color: #ced0d6;
	border-radius: 8px;
	width: 90vw;
	margin: 20px auto;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	padding: 16px;
`;

export const CardTitle = styled.h2`
	color: #1d183d;
	font-size: 24px;
	margin: 0;
`;

export const CardDescription = styled.p`
	margin-top: 15px;
	font-size: 1.3rem;
	color: #474952;
`;
