import styled from 'styled-components';

export const FormBox = styled.div`
	margin-bottom: 0px;
	position: relative;
	top: 1rem;
	display: flex;

	@media (max-width: 800px) {
		display: grid;
		justify-items: center;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		list-style: none;
		column-gap: 4rem;
		row-gap: 0.5rem;
	}
`;
export const FormSelect = styled.select`
	border: none;
	border-radius: 3px;
	width: 300px;
	height: 2rem;
	font-size: 1rem;
	color: #727070;

	@media (max-width: 800px) {
		width: 50vw;
	}
`;
export const FormInput = styled.input`
	position: relative;
	border: none;
	border-radius: 3px;
	width: 300px;
	height: 2rem;
	font-size: 0.98rem;
	color: #727070;
	margin-left: 20px;

	@media (max-width: 800px) {
		width: 50vw;
		margin-left: 0px;
	}
`;
