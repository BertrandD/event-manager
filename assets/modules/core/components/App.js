import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

class App extends Component {
    render() {
      const { children } = this.props;
        return (
          <div className="app app-header-fixed app-aside-fixed">
            <header className="app-header navbar" role="menu">
              <div className="navbar-header bg-dark">
                <Link to="/" className="navbar-brand text-lt">
                  <i className="fa fa-btc" />
                  <span className="hidden-folded m-l-xs">
                    Tournament
                  </span>
                </Link>
              </div>

              <div className="navbar-collapse box-shadow bg-white-only">
                <div className="nav navbar-nav hidden-xs">
                  <span className="btn no-shadow navbar-btn">
                    Hello
                  </span>
                </div>
              </div>
            </header>

            <aside className="app-aside hidden-xs bg-dark">
              <div className="aside-wrap">
                <div className="navi-wrap">
                  <Nav />
                </div>
              </div>
            </aside>

            <div className="app-content" role="main">{children}</div>
          </div>
        );
    }
}

export default App;
