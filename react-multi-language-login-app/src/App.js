import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/content" component={Content} />
        {/* Add more routes as needed */}
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
