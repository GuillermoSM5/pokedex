import React from 'react';
import './Card.scss';
import { useSelector, useDispatch } from 'react-redux';

const Card = ({ pokemon, boton = 'capturar' }) => {
	const capturado = useSelector((state) => state.capturado);
	const dispatch = useDispatch();
	const banca = (e) => {
		e.preventDefault();
		if (boton === 'capturar') {
			dispatch({
				type: 'añadir banca',
				data: pokemon,
				capturado: true,
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
				{capturado && boton === 'capturar' ? (
					<div className="card__contenido-alerta">
						<p>Pokemon Capturado. Puedes verlo en tu pokedex</p>
					</div>
				) : (
					<></>
				)}
			</div>
		</section>
	);
};

export default Card;
