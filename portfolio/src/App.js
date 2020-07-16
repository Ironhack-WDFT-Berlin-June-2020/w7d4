import React from "react";
import "./App.css";
import Home from "./Home";
import About from "./About";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import { Projects } from "./Projects";
import ProjectDetail from "./ProjectDetail";


function App() {
  const NotFound = () => {
    return <h1>404 Not found 🙃</h1 >
  }
  return (
    <div className="App">
      {/* <Home />
      <About /> */}
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/projects/:id" component={ProjectDetail} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
