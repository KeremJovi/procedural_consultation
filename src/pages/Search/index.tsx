import React from 'react';
import Card from '../../components/Card';
import Menu from '../../components/Menu';

function Search() {
	return (
		<div>
			<Menu />
			<Card
				numProcess="555555555555555555555"
				court="TJSP"
				description="Um processo de advocacia começa com a identificação do problema ou questão jurídica a ser resolvida. O advogado realiza uma análise minuciosa dos fatos e evidências disponíveis para determinar as opções legais disponíveis."
			/>
		</div>
	);
}

export default Search;
