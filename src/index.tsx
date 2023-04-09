import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Search from './pages/Search';
import Details from './pages/details';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/details" element={<Details />} />
			<Route path="/search" element={<Search />} />
		</Routes>
	</BrowserRouter>
);
