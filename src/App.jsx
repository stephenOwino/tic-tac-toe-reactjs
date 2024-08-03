import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Game from "./Components/Game";
import "./index.css";

const App = () => {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/game' element={<Game />} />
			</Routes>
		</main>
	);
};

export default App;
