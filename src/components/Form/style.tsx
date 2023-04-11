import styled from 'styled-components';

export const FormContainer = styled.div`
	background-color: #9a94a5;
	padding: 16px;
	position: relative;
	width: 100vw;
	margin: 0px auto;
	height: 20rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;

	@media (min-width: 1200px) {
		height: 25rem;
	}

	@media (max-width: 800px) {
		width: 90vw;
		height: 25rem;
	}
`;

export const FormContainerChild = styled.div`
	width: 95%;
	height: 40%;
	display: grid;
	align-content: center;
`;

export const FormTitle = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;
`;

export const FormParagraph = styled.p`
	display: flex;
	justify-content: center;
	color: #373753;
	font-weight: bold;
	margin-top: 0px;
	font-family: 'Noto Serif Khojki', serif;
	align-items: center;

	@media (max-width: 800px) {
		width: 60vw;
		word-wrap: normal;
		overflow-wrap: normal;
		text-align: center;
	}
`;

export const FormFont = styled.h1`
	margin-top: 0px;
	margin-bottom: 0px;
	display: flex;
	justify-content: center;
	font-size: 10vw;
	color: #23307c;
	font-family: 'Noto Serif Khojki', serif;
	font-weight: bold;

	@media (min-width: 1200px) {
		font-size: 140px;
	}
`;
export const FormSearch = styled.div`
	display: flex;
	justify-content: center;

	@media (max-width: 800px) {
		display: grid;
		margin: 0px auto;
		align-items: center;
		justify-content: center;
		justify-items: center;
	}
`;
