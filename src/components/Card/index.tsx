import React from 'react';
import { CardContainer, CardDescription, CardTitle } from './style';

interface CardProps {
	numProcess: string;
	court: string;
	description: string;
}

function Card({ numProcess, court, description }: CardProps) {
	const descriptionArray = description.split(' ');
	const descriptionParcial = descriptionArray.slice(0, 8).join(' ');
	return (
		<CardContainer>
			<CardTitle>
				Processo n.{numProcess} do {court}
			</CardTitle>
			<CardDescription>{descriptionParcial}</CardDescription>
		</CardContainer>
	);
}

export default Card;
