import styled from 'styled-components';

export const ProcessesSearch = styled.div`
	background-color: #9a94a5;
	padding: 16px;
	position: relative;
	width: 100vw;
	margin: 0px;
	height: 4rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	padding: 0px;
	align-items: center;

	@media (max-width: 800px) {
		width: 100vw;
		height: 10rem;
	}
`;

export const ProcessesSearchBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 800px) {
		display: grid;
		align-items: center;
		justify-content: center;
		justify-items: center;
	}
`;

export const SearchDiv = styled.div`
	margin-bottom: 0px;

	@media (max-width: 800px) {
		position: relative;
		margin-top: 0px;
		margin-bottom: 0px;
	}
`;

export const SearchButton = styled.div`
	display: flex;
	margin: 0px;
	margin-bottom: 13px;

	@media (max-width: 800px) {
		position: relative;
		align-items: center;
		justify-content: center;
	}
`;
