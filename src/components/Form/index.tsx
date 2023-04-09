import React, { useState } from 'react';
import Button from '../Button';
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
					<div>
						<Button />
					</div>
				</FormSearch>
			</FormContainerChild>
		</FormContainer>
	);
}

export default Form;
