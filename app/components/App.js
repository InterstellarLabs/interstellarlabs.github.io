var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var Switch = ReactRouter.Switch;

var Nav = require('./Nav');
var Home = require('./Home');

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
