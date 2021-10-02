import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./Components/Login";
import { Nav } from "./Components/Nav";
import { LandingPage } from "./Pages/LandingPage";
import "./App.css";
import { Footer } from "./Components/Footer";
function App() {
  const [validated, setValidated] = useState(false);

  useEffect(() => {
    console.log(process.env.REACT_APP_PASSWORD);
    let val = window.localStorage.getItem(process.env.REACT_APP_PASSWORD);
    val && setValidated(true);
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            {validated ? (
              <>
                <Nav />
                <LandingPage />
                <Footer />
              </>
            ) : (
              <Login validated={validated} setValidated={setValidated} />
            )}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
