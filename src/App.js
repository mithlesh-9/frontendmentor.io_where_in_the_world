import React, { Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';
import { connect } from 'react-redux';

//pages
import Home from './pages/home/home';
import Country from './pages/country-page/country.jsx';

//components
import Header from './components/header/header.jsx';

import { setDarkmode,setDarkmodeOff } from './redux/darkmode/darkmode.actions';

class App extends Component {



  render() {

    const {setDarkmode,setDarkmodeOff, darkmode} = this.props
    return (
    <div className="App">
    <Header  darkmode={darkmode} setDarkmode={setDarkmode} setDarkmodeOff={setDarkmodeOff} />
      <Switch>
      <Route exact path="/country/:name" component={Country} />
      <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}
}

const mapStateToProps = ({darkmode}) => ({
  darkmode: darkmode.darkmode
})

const mapDispatchToProps = dispatch => ({
  setDarkmode: () => dispatch(setDarkmode()),
  setDarkmodeOff: () => dispatch(setDarkmodeOff())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
