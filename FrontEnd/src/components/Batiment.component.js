import React from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import afficherBatiment from "./afficherBatiment.component";

export default class Batiments extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      batiments: [],
    };
  }

  async componentDidMount() {
    await axios
      .get("http://localhost:3000/batiment")
      .then((res) => {
        this.setState({
          batiments: res.data,
        });
      })
      .catch((err) => console.error(err));
  }

  renderBatiments() {
    const { batiments } = this.state;
    return batiments.map((batiment) => (
      <ListItem key={batiment.ba_id}>
        <ListItemButton>
          <Router>
            <ListItemText>
              <a href={afficherBatiment}>{batiment.ba_adresse}</a>
            </ListItemText>
          </Router>
        </ListItemButton>
      </ListItem>
    ));
  }

  render() {
    return <List>{this.renderBatiments()}</List>;
  }
}
