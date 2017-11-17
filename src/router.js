import React, { Component } from 'react';



import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';

class AppRouter extends Component {
	

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path={'/'} component={App}/>
					
				</Switch>
			</Router>
		);
	}
}

export default AppRouter;