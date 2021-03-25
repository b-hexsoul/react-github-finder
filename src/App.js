import { Component } from "react";
import Navbar from "./components/layout/Navbar.component";
import Users from "./components/users/Users";

import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_CLIENT_SECRET}`
    );

    this.setState({ loading: false, users: res.data });
  }

  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
