import React from 'react';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import { useSearchContext } from '../../contexts/SearchContext';

function Search() {
	const { searchResults } = useSearchContext();

	const cards = searchResults.map((obj) => (
		<Card
			key={obj.numProcess}
			id={obj._id || ''}
			numProcess={obj.numProcess}
			court={obj.court}
			description={obj.description}
		/>
	));

	return (
		<div>
			<Menu />
			{cards}
		</div>
	);
}

export default Search;
