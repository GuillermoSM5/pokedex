import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card/Card';
import './Pokedex.scss';

const Team = () => {
	const dispatch = useDispatch();
	const pokemones = useSelector((state) => state.banca);
	useEffect(() => {
		dispatch({
			type: 'toggle active',
			data: false,
		});
	});
	return (
		<section className="pokedex">
			<div className="banca__contenido">
				<h2 className="banca__contenido-title">
					{pokemones.length > 0 ? 'Pokedex' : 'Agrega pokemones a tu pokedex'}
				</h2>
				<div className="banca__contenido-pokemones">
					{pokemones.map((pokemon) => (
						<Card key={pokemon.id} pokemon={pokemon} boton="Liberar pokemon" />
					))}
				</div>
			</div>
			<div className="banca__pokemones"></div>
		</section>
	);
};

export default Team;
