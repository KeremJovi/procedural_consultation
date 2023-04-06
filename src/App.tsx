import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

function App() {
	return (
		<div className="App">
			<Form />
			<Card
				numProcess="5555555555555555555555"
				court="TJSP"
				description="Assim, você pode garantir que o texto seja apresentado da melhor maneira possível, de acordo com o tamanho da tela."
			/>
		</div>
	);
}

export default App;
