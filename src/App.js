import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom'

import { Home } from './pages'

const App = () => {
	const isLoggedIn = false
	let routes

	if (isLoggedIn) {
		routes = <div>You're Logged In</div>
	} else {
		routes = (
			<Switch>
				<Route path='/' exact>
					<Home />
				</Route>
				<Redirect to='/' />
			</Switch>
		)
	}
	return <Router>{routes}</Router>
}

export default App
