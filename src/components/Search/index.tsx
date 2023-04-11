import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormBox, FormInput, FormSelect } from './style';
import { ButtonContainer } from '../Button/style';
import { getProcesses } from '../../services/req/processes_db';
import { useSearchContext } from '../../contexts/SearchContext';

function Search() {
	const [court, setCourt] = useState('');
	const [numProcess, setNumProcess] = useState('');
	const [loading, setLoading] = useState(false);

	const { setSearchResults } = useSearchContext();
	const history = useNavigate();

	const handleSearch = async () => {
		try {
			setLoading(true);
			const { data } = await getProcesses({ numProcess, court });
			setSearchResults(data);
			history('/search');
			setLoading(false);
		} catch (error) {
			console.log(error);
			alert('Ops, não foi possível carregar as informações');
		}
	};

	return (
		<div>
			<FormBox>
				<div>
					<label htmlFor="court">
						<FormSelect
							id="court"
							name="court"
							value={court}
							onChange={(e) => setCourt(e.target.value)}
						>
							<option value="Tribunal" selected>
								<h3> Tribunal</h3>
							</option>
							<option value="TJAC">TJAC</option>
							<option value="TJAL">TJAL</option>
							<option value="TJAM">TJAM</option>
							<option value="TJAP">TJAP</option>
							<option value="TJBA">TJBA</option>
							<option value="TJCE">TJCE</option>
							<option value="TJDF">TJDF</option>
							<option value="TJES">TJES</option>
							<option value="TJGO">TJGO</option>
							<option value="TJMA">TJMA</option>
							<option value="TJMG">TJMG</option>
							<option value="TJMS">TJMS</option>
							<option value="TJMT">TJMT</option>
							<option value="TJPA">TJPA</option>
							<option value="TJPB">TJPB</option>
							<option value="TJPE">TJPE</option>
							<option value="TJPI">TJPI</option>
							<option value="TJPR">TJPR</option>
							<option value="TJRN">TJRN</option>
							<option value="TJRO">TJRO</option>
							<option value="TJRR">TJRR</option>
							<option value="TJRS">TJRS</option>
							<option value="TJSC">TJSC</option>
							<option value="TJSE">TJSE</option>
							<option value="TJSP">TJSP</option>
							<option value="TJTO">TJTO</option>
						</FormSelect>
					</label>
				</div>
				<div>
					<label htmlFor="numProcess">
						<FormInput
							type="text"
							name="numProcess"
							id="numProcess"
							placeholder=" Número de Processo"
							value={numProcess}
							onChange={(e) => setNumProcess(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<ButtonContainer type="button" onClick={handleSearch}>
						Buscar
					</ButtonContainer>
				</div>
			</FormBox>
		</div>
	);
}

export default Search;
