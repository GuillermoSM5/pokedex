import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Card from '../Card/Card';
import './Busqueda.scss';

const Busqueda = () => {
	const dispatch = useDispatch();
	const [serchPokemon, setSerchPokemon] = useState('');
	const [pokemon, setPokemon] = useState('');

	useEffect(() => {
		dispatch({
			type: 'toggle active',
			data: false,
		});
	});
	const inputPokemon = (e) => {
		setSerchPokemon(e.target.value);
	};
	const search = (e) => {
		if (serchPokemon) {
			e.preventDefault();
			fetch(`https://pokeapi.co/api/v2/pokemon/${serchPokemon}`)
				.then((res) => res.json())
				.then((data) => setPokemon(data))
				.catch((err) => {
					console.log('Pokemon no encontrado');
					setPokemon('');
				});
		} else StereoPannerNode(true);
	};
	return (
		<section className="busqueda">
			<h2 className="busqueda__title">Busca tu pokemon favorito</h2>
			<form className="busqueda__formulario" action="" onSubmit={search}>
				<input
					className="busqueda__formulario-input"
					type="text"
					placeholder="Busca un pokemon por su nombre o id"
					value={serchPokemon}
					onChange={inputPokemon}
				/>
				<button className="busqueda__formulario-button">Buscar</button>
			</form>
			{pokemon && <Card pokemon={pokemon} />}
		</section>
	);
};

export default Busqueda;
