import React from 'react';
import { CardContainer, CardDescription, CardTitle, Link } from './style';

interface CardProps {
	id: string;
	numProcess: string;
	court: string;
	description: string;
}

function Card({ id = '', numProcess, court, description }: CardProps) {
	const descriptionArray = description.split(' ');
	const descriptionParcial = descriptionArray.slice(0, 7).join(' ');
	return (
		<CardContainer>
			<Link to={`/details/${id}`}>
				<CardTitle>
					Processo n.{numProcess} do {court}
				</CardTitle>
				<CardDescription>{descriptionParcial}</CardDescription>
			</Link>
		</CardContainer>
	);
}

export default Card;
