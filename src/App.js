import axios from "axios";
import "./App.scss";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
	Redirect,
	useParams,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import { Shelves } from "./pages/Shelves/Shelves";

const App = () => {
	return (
		<>
			<Router>
				<Switch>
					<Route path="/" exact>
						<HomePage />
					</Route>
					<Route path="/shelves">
						<Shelves />
					</Route>

					<Route path="/:shelfID" />

					<Route path="/profile" />
				</Switch>
			</Router>
		</>
	);
};

export default App;
