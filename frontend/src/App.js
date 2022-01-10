// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import VanListings from "./components/VanListings";
import VanDetailsPage from "./components/VanDetailsPage";
import VanHostForm from "./components/VanHostForm";
import Home from "./components/HomePage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginFormPage />
          </Route>
          <Route exact path='/signup'>
            <SignupFormPage />
          </Route>
          <Route exact path='/vans'>
            <VanListings />
          </Route>
          <Route exact path='/vans/:vanId'>
            <VanDetailsPage />
          </Route>
          <Route>
            <VanHostForm exact path='/host'/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
