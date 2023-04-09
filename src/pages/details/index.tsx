import React from 'react';
import Processes from '../../components/Processes';

function Details() {
	const date = new Date();
	return (
		<div>
			<Processes
				numProcess="55555555555555555555"
				court="TJSP"
				startDate={date}
				updateDate={date}
				description="Suspensão do Prazo referente ao usuario foi alterado para data
				devido a alteração da tabela de feriados"
				status="Cumprimento de Setença - Honorários Advocatícios"
				creditor={{
					name: 'Nelson Willians & Advogados Associados',
					link: 'https://www.google.com/',
				}}
				appellant={{
					name: 'Nelson Willians & Advogados Associados',
					link: 'https://www.google.com/',
				}}
				attorney={[
					{
						name: 'Rafael Sfanzerla Durante',
						link: 'https://www.google.com/',
					},
					{
						name: 'Wilton Luis de Carvalho',
						link: 'https://www.google.com/',
					},
				]}
			/>
		</div>
	);
}

export default Details;
