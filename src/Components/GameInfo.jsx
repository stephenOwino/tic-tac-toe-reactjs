import React from "react";
import Friends from "../../src/Images/friends.jpg";

const GameInfo = ({ status, winner, xIsNext }) => {
	return (
		<section className='game-information'>
			{xIsNext && !winner ? (
				<h3 className='player-x'>It's your turn, player X</h3>
			) : !xIsNext && !winner ? (
				<h3 className='player-o'>Now you, player Y! </h3>
			) : winner && status === "Winner: X" ? (
				<h3 className='player-x'>Nice! I won! </h3>
			) : (
				<h3 className='player-o'>Wohoo! I made it!</h3>
			)}
			<img src={Friends} alt='Player X and Player O' />
		</section>
	);
};

export default GameInfo;
