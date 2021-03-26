import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar.component";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Alert from "./components/layout/Alert";
import About from "./pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import "./App.css";
import User from "./components/users/User";

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github Finder" icon="fab fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:user" component={User} />
                <Route path="*" component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
