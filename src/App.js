import React from "react";
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from "../src/pages/homepage/homepage.component";
import ShopPage from "../src/pages/shop/shop.component";
import Header from "./components/header/header.component";
import signInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";



function App() {
  return (
    <div>
     <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={signInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;