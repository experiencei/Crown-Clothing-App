import React from "react";
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from "../src/pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import Header from "./components/header/header.component";



function App() {
  return (
    <div>
     <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;