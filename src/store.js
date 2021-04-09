import { createStore } from 'redux';

const initialState = {
	active: [false],
	banca: [],
	capturado: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'toggle active':
			initialState.active.push(action.data);
			initialState.active.shift();
			break;

		case 'añadir banca':
			return {
				...state,
				banca: state.banca.concat(action.data),
				capturado: action.capturado,
			};

		case 'Liberar pokemon':
			return {
				...state,
				banca: state.banca.filter((pokemon) => pokemon.id !== action.data.id),
			};

		case 'no capurado':
			return {
				...state,
				capturado: false,
			};

		default:
			break;
	}
	return state;
};

export default createStore(reducer);
