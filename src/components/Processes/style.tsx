import styled from 'styled-components';

export const ProcessesTitile = styled.div`
	margin: 25px auto;
	width: 90vw;
`;
export const ProcessesBody = styled.div`
	display: flex;

	@media (max-width: 800px) {
		display: grid;
		justify-content: center;
		row-gap: 1rem;
	}
`;

export const TitleCuston = styled.h1`
	color: #1d183d;
	font-size: 28px;
	font-family: 'Roboto', sans-serif;

	@media (max-width: 350px) {
		font-size: 24px;
		text-align: center;
	}
`;

export const DateProcess = styled.p`
	color: #9e9d9d;
	font-size: 15px;

	@media (max-width: 350px) {
		text-align: center;
	}
`;

export const ProcessesMovements = styled.div`
	color: #1d183d;
	background: #f5f5f57a;
	width: 60vw;
	margin-left: 5vw;
	border-color: #1d183d;
	border: 1px;

	@media (max-width: 800px) {
		width: 90vw;
	}
`;

export const MovementsDiv = styled.div`
	background: #e0dfe479;
	height: 30px;
	display: flex;
	align-items: center;
`;

export const TitleMovements = styled.h1`
	color: #1d183d;
	font-size: 17px;
	font-family: 'Roboto', sans-serif;
	margin-left: 20px;
`;

export const Spacer = styled.div`
	border-top: 1px solid #ccc;
	margin-top: 0px;
	margin-bottom: 20px;
`;

export const Records = styled.div`
	margin-left: 20px;
`;
export const DesciptionRecords = styled.p`
	margin-top: 10px;
	color: #1d183d;
	font-size: 20px;
`;

export const DetailsSideBar = styled.div`
	display: grid;
	justify-content: center;
	width: 35vw;
	row-gap: 1rem;

	@media (max-width: 800px) {
		width: 100vw;
	}
`;

export const DetailsDiv = styled.div`
	display: flex;
	align-items: center;
`;

export const Details = styled.div`
	margin-bottom: 1rem;
	@media (max-width: 800px) {
		width: 88vw;
	}
`;
export const TitleSideBar = styled.p`
	color: #1d183d;
	font-size: 17px;
	font-family: 'Roboto', sans-serif;
`;

export const DetailsStatus = styled.p`
	color: #9e9d9d;
	font-size: 15px;
	margin-top: 15px;
	font-family: 'Roboto', sans-serif;
`;

export const InvolvedSideBar = styled.div`
	display: grid;
	row-gap: 1.3rem;
	padding-bottom: 20px;
`;

export const PeopleInvolved = styled.a`
	color: #0f0552;
	font-family: 'Roboto', sans-serif;
`;
export const Involved = styled.p`
	color: #9e9d9d;
	font-size: 15px;
	margin-top: 8px;
	font-family: 'Roboto', sans-serif;
`;
