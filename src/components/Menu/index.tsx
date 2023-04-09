import React from 'react';
import Button from '../Button';
import Search from '../Search';
import {
	ProcessesSearch,
	ProcessesSearchBox,
	SearchButton,
	SearchDiv,
} from './style';

function Menu() {
	return (
		<ProcessesSearch>
			<ProcessesSearchBox>
				<SearchDiv>
					<Search />
				</SearchDiv>
				<SearchButton>
					<Button />
				</SearchButton>
			</ProcessesSearchBox>
		</ProcessesSearch>
	);
}

export default Menu;
