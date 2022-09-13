import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Redirect, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/checkOut">
        <Checkout></Checkout>
      </Route>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
    </div>
  );
}

export default App;
