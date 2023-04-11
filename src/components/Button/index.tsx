import React, { useCallback } from 'react';
import { ButtonContainer } from './style';

export function Button({ handleSubmit }: any) {
	const onClick = useCallback(() => {
		handleSubmit();
	}, [handleSubmit]);
	return (
		<ButtonContainer type="button" onClick={onClick}>
			Buscar
		</ButtonContainer>
	);
}
