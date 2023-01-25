import React, { useEffect, useState} from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./components/home";
import PrivateRoute from "./components/privateRoute";
import Temp from "./components/temp";
import EventSetup from "./components/eventSetup";

function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("user"));
    
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
      <Router>
          <Switch >

            <Route exact path="/"> <Temp></Temp> </Route>

            <Route path="/login"> <Login></Login> </Route>

            <Route path="/register"> <Register/> </Route> 

            <Route path="/eventSetup"> <EventSetup/> </Route> 

          </Switch>
      </Router>
    );
}

export default App;
