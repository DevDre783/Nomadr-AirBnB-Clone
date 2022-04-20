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
import EditVanForm from "./components/EditVanForm";
import Footer from './components/Footer';
import Home from "./components/HomePage";
import BookingsPage from "./components/BookingsPage";

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
            <Footer />
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
          <Route exact path='/host'>
            <VanHostForm />
          </Route>
          <Route exact path='/vans/:vanId/host'>
            <EditVanForm />
          </Route>
          <Route exact path='/bookings'>
            <BookingsPage />
          </Route>
          <Route path='/'>
            <h1>Page Not Found.</h1>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
