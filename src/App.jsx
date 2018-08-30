import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Header from './views/header';
import Body from './views/body';
import Footer from './views/footer';
import style from './App.css';

class App extends Component {
  render() {
    return (
			<div className={style.main}>
				<Router>
					<div>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/topics">Topics</Link>
							</li>
						</ul>
						<hr />

						<Route exact path="/" component={Header} />
						<Route path="/about" component={Body} />
						<Route path="/topics" component={Footer} />
					</div>
				</Router>
			</div>
    );
  }
}

App.propTypes = {};

export default App;
