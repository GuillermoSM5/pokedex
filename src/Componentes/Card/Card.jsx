import React from 'react';
import './Card.scss';
import { useDispatch } from 'react-redux';

const Card = ({ pokemon, boton = 'capturar' }) => {
	const dispatch = useDispatch();
	const banca = (e) => {
		e.preventDefault();
		if (boton === 'capturar') {
			dispatch({
				type: 'añadir banca',
				data: pokemon,
			});
		}
		if (boton === 'Liberar pokemon') {
			dispatch({
				type: 'Liberar pokemon',
				data: pokemon,
			});
		}
	};
	return (
		<section className="card">
			<div className="card__contenido">
				<h4 className="card__contenido-title">{pokemon.name}</h4>
				<img
					className="card__contenido-image"
					src={pokemon ? pokemon.sprites.front_default : ''}
					alt=""
				/>
				<img
					className="card__contenido-image"
					src={pokemon ? pokemon.sprites.back_default : ''}
					alt=""
				/>
				<form action="" onSubmit={banca}>
					<button className="card__contenido-button">{boton}</button>
				</form>
			</div>
		</section>
	);
};

export default Card;
