import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom'

import { Components, HeroSection } from './pages'

const App = () => {
	const isLoggedIn = false
	let routes

	if (isLoggedIn) {
		routes = <div>You're Logged In</div>
	} else {
		routes = (
			<Switch>
				<Route path='/components' exact>
					<Components />
				</Route>
				<Route path='/components/sections/heroes' exact>
					<HeroSection />
				</Route>
				<Redirect to='/components' />
			</Switch>
		)
	}
	return <Router>{routes}</Router>
}

export default App
