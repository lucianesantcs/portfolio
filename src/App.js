import { HashRouter as BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects/Projects";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={About} exact></Route>
          <Route path="/projects" component={Projects} exact></Route>
          <Route path="/contact" component={Contact} exact></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
