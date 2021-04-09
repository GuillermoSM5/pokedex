import React from 'react';
import Header from './Componentes/Header/Header';
import Busqueda from './Componentes/Busqueda/Busqueda';
import Pokedex from './Componentes/Pokedex/Pokedex';
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<Provider store={store}>
			<Header />
			<Switch>
				<Route exact path="/">
					<Busqueda />
				</Route>
				<Route path="/team">
					<Pokedex />
				</Route>
			</Switch>
		</Provider>
	);
}

export default App;
