import React from 'react';
import Search from '../Search';
import { ProcessesSearch, ProcessesSearchBox, SearchDiv } from './style';

function Menu() {
	return (
		<ProcessesSearch>
			<ProcessesSearchBox>
				<SearchDiv>
					<Search />
				</SearchDiv>
			</ProcessesSearchBox>
		</ProcessesSearch>
	);
}

export default Menu;
