import React from 'react';
import {
	FormContainer,
	FormContainerChild,
	FormFont,
	FormParagraph,
	FormSearch,
	FormTitle,
} from './style';

import Search from '../Search';

function Form() {
	return (
		<FormContainer>
			<FormContainerChild>
				<FormTitle>
					<FormFont>buscar</FormFont>
					<FormParagraph>
						Selecione um tribunal para listar os processos ou buscar pelo número
						unificado
					</FormParagraph>
				</FormTitle>
				<FormSearch>
					<Search />
				</FormSearch>
			</FormContainerChild>
		</FormContainer>
	);
}

export default Form;
