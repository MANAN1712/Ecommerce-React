import React from "react";
import { Grid } from "@material-ui/core";
import "./index.css";
import Footer from "./Footer";

import { Container } from "react-bootstrap";
import Data from "./Data";
import Bar from "./Components/Bar";

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      Dataisloaded: false,
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true,
    });

    fetch("https://retoolapi.dev/vMaarF/data")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          Dataisloaded: true,
        });

        // console.log(json);
      });

    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <div className="Main">
        <Container>
          <Grid container justifyContent={"space-evenly"}>
            {this.state.loading ? (
              <h1>loading</h1>
            ) : (
              this.state.items.map((items) => {
                return (
                  <Grid key={items.id} md={4} item>
                    <Data name={items} />
                  </Grid>
                );
              })
            )}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default Fetch;
