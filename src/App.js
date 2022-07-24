import "./App.css";
import Bakery from "./components/Bakery";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cakes from "./components/Bakery items/Cakes";
import Sandwiches from "./components/Bakery items/Sandwiches";
import Pizzas from "./components/Bakery items/Pizzas";
import Burgers from "./components/Bakery items/Burgers";
import Donuts from "./components/Bakery items/Donuts";
import Shakes from "./components/Bakery items/Shakes";
import About from "./components/Bakery items/About";

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
        <Route exact path="/">
            <Bakery />
          </Route>
          <Route exact path="/Cakes">
            <Cakes />
          </Route>
          <Route exact path="/Sandwiches">
            <Sandwiches />
          </Route>
          <Route exact path="/Pizzas">
            <Pizzas />
          </Route>
          <Route exact path="/Burgers">
            <Burgers />
          </Route>
          <Route exact path="/Donuts">
            <Donuts/>
          </Route>
          <Route exact path="/Shakes">
            <Shakes/>
          </Route>
          <Route exact path="/About">
            <About/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
