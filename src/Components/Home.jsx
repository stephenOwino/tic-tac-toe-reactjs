import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className='home'>
			<h1>Welcome to Tic Tac Toe</h1>
			<Link to='/game' className='start-button'>
				Start Game
			</Link>
		</div>
	);
};

export default Home;
