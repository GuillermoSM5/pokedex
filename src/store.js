import { createStore } from 'redux';

const initialState = {
	active: [false],
	banca: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'toggle active':
			initialState.active.push(action.data);
			initialState.active.shift();
			break;

		case 'añadir banca':
			initialState.banca.push(action.data);
			break;

		case 'Liberar pokemon':
			return {
				active: initialState.active,
				banca: initialState.banca.filter(
					(pokemon) => pokemon.id !== action.data.id
				),
			};

		default:
			break;
	}
	return state;
};

export default createStore(reducer, initialState);