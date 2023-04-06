import styled from 'styled-components';

export const FormContainer = styled.div`
	background-color: #9a94a5;
	border-radius: 20px 20px 0px 0px;
	padding: 16px;
	position: relative;
	width: 90vw;
	margin: 10px auto;
	height: 20rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;

	@media (max-width: 700px) {
		width: 90vw;
		height: 25rem;
	}
`;
export const FormBox = styled.div`
	max-width: 80%;
	margin-bottom: 0px;
	position: relative;
	top: 1rem;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	list-style: none;
	column-gap: 4rem;
	row-gap: 0.5rem;

	@media (max-width: 700px) {
		display: grid;
		justify-items: center;
	}
`;
export const FormSelect = styled.select`
	border: none;
	border-radius: 3px;
	width: 120%;
	height: 2rem;
	font-size: 1rem;
	color: #727070;

	@media (max-width: 700px) {
		width: 50vw;
	}
`;

export const FormInput = styled.input`
	border: none;
	border-radius: 3px;
	width: 118%;
	height: 2rem;
	font-size: 0.98rem;
	color: #727070;

	@media (max-width: 700px) {
		width: 50vw;
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

	@media (max-width: 700px) {
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
	font-size: 15vw;
	color: #23307c;
	font-family: 'League Script', cursive;
	font-weight: bold;
`;
export const FormSearch = styled.div`
	display: flex;
	justify-content: center;

	@media (max-width: 700px) {
		display: grid;
		margin: 0px auto;
	}
`;
