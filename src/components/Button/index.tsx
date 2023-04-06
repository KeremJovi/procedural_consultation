import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
	width: 5rem;
	height: 2rem;
	font-size: 1rem;
	color: #ffffff;
	margin: 1rem 4rem;
	background: #131212;
	border: none;
	border-radius: 5px;

	@media (max-width: 700px) {
		position: relative;
		margin-top: 30px;
		margin: 10vw 0px 0vw 25vw;
	}
`;
class Button extends React.PureComponent {
	render() {
		return <ButtonContainer type="button">Busca</ButtonContainer>;
	}
}

export default Button;
