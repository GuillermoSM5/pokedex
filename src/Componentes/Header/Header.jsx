import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Hamburguesa from './assets/MenuIcon.svg';
import Close from './assets/Close.svg';

const Header = () => {
	const active = useSelector((state) => state.active[0]);
	const dispatch = useDispatch();
	return (
		<>
			<header className="Header-v1">
				<img
					onClick={() => {
						dispatch({
							type: 'toggle active',
							data: !active,
						});
					}}
					className="Header-v1__icon"
					src={active ? Close : Hamburguesa}
					alt="Menu Hamburguesa"
				/>
				<nav
					className={
						active
							? 'Header-v1__navbar Header-v1__navbar--active'
							: 'Header-v1__navbar'
					}
				>
					<Link className="Header-v1__navbar-link" to="/">
						Busqueda
					</Link>
					<Link className="Header-v1__navbar-link" to="/team">
						Pokedex
					</Link>
				</nav>
			</header>
		</>
	);
};

export default Header;
