import React from 'react';
import './App.css';
import './index.css';
import Home from './pages/Home/Home';
import CustomCursor from './components/CustomCursor/CustomCursor';
import About from './pages/'
import { Route, Switch } from 'react-router-dom';




function App() {
  



  
  return (
    <Switch>
      <Route exact path="/" component={Home}/>

      {/* <Home /> */}
      
      
    </Switch>
  );

}

export default App;