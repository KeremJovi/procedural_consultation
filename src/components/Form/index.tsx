import React, { useState } from 'react';

import Button from '../Button';
import {
	FormBox,
	FormContainer,
	FormContainerChild,
	FormFont,
	FormInput,
	FormParagraph,
	FormSearch,
	FormSelect,
	FormTitle,
} from './style';

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
					<FormBox>
						<div>
							<label htmlFor="opcao">
								<FormSelect id="opcao" name="opcao">
									<option value="Tribunal" selected>
										<h3> Tribunal</h3>
									</option>
									<option value="opcao1">Opção 1</option>
									<option value="opcao2">Opção 2</option>
									<option value="opcao3">Opção 3</option>
								</FormSelect>
							</label>
						</div>
						<div>
							<label htmlFor="numberProcess">
								<FormInput
									type="text"
									name="numberProcess"
									id="numberProcess"
									placeholder=" Número de Processo"
								/>
							</label>
						</div>
					</FormBox>
					<div>
						<Button />
					</div>
				</FormSearch>
			</FormContainerChild>
		</FormContainer>
	);
}

export default Form;
