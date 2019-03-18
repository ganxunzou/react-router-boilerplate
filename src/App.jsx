import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import Header from './views/header';
// import Body from './views/body';
// import Footer from './views/footer';
import style from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Comp: null,
    };
  }
  dynamicImport(type) {
    console.log(type);
    import(`./views/${type}` /* webpackChunkName: "xxx" */).then((Comp) => {
      this.setState({ Comp });
    });
  }

  render() {
    const { Comp } = this.state;
    return (
      <div className={style.main}>
        <Router>
          <div>
            <ul>
              <li>
                <button
                  onClick={() => {
                    this.dynamicImport('header');
                  }}
                >
                  header
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.dynamicImport('body');
                  }}
                >
                  Body
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    this.dynamicImport('footer');
                  }}
                >
                  Footer
                </button>
              </li>
            </ul>
            <hr />
            {Comp && <Comp.default />}
            {/* <Route exact path="/" component={Header} />
						<Route path="/about" component={Body} />
						<Route path="/topics" component={Footer} /> */}
          </div>
        </Router>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
