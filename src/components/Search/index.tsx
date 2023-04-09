import React from 'react';
import { FormBox, FormInput, FormSelect } from './style';

function Search() {
	return (
		<div>
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
		</div>
	);
}

export default Search;
