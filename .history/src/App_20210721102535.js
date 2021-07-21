import React from 'react';
import './App.css';
import './index.css';
import Home from './pages/Home/Home';
import CustomCursor from './components/CustomCursor/CustomCursor';
import About from './pages/About/About';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';




function App() {
  



  
  return (
    <>
      
      <CustomCursor/>

      <Switch>
        <Layout>

			  <Route exact path="/" component={Home} />
			  <Route  path="/about" component={About} />

      </Switch>
    </>
  );

}

export default App;
