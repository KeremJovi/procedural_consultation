import React, { ReactNode, createContext, useMemo, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import Search from './pages/Search';
import Details from './pages/details';
import { Result } from './contexts/typesConfig';
import { SearchProvider } from './contexts/SearchContext';

function App() {
	return (
		<div className="App">
			<SearchProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Form />} />
						<Route path="/details/:id" element={<Details />} />
						<Route path="/search" element={<Search />} />
					</Routes>
				</BrowserRouter>
			</SearchProvider>
		</div>
	);
}

export default App;
