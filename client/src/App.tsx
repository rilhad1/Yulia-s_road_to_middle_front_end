import React, {useContext} from 'react';
import {BrowserRouter as Router,} from "react-router-dom";

import AuthContext from './context/AuthContext';
import {useRoutes} from './routes';

const App = () => {
	const {isAuthenticated} = useContext(AuthContext);

	const routes = useRoutes(isAuthenticated);
	return <Router >
		{ isAuthenticated && <div>{`isAuthenticated: ${isAuthenticated}`}</div>}
		<div className="container">
			{routes}
		</div>
	</Router>;
};

export default App;