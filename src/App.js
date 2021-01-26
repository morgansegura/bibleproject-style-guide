import React from 'react'
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom'

import {
	CardSection,
	Components,
	FooterElement,
	HeaderElement,
	HeroSection,
} from './pages'

const App = () => {
	const isLoggedIn = false
	let routes

	if (isLoggedIn) {
		routes = <div>You're Logged In</div>
	} else {
		routes = (
			<Switch>
				<Route path='/marketing/components/sections/cards' exact>
					<CardSection />
				</Route>
				<Route path='/marketing/components' exact>
					<Components />
				</Route>
				<Route path='/marketing/components/elements/footers' exact>
					<FooterElement />
				</Route>
				<Route path='/marketing/components/elements/headers' exact>
					<HeaderElement />
				</Route>
				<Route path='/marketing/components/sections/heroes' exact>
					<HeroSection />
				</Route>
				<Redirect to='/marketing/components' />
			</Switch>
		)
	}
	return <Router>{routes}</Router>
}

export default App
