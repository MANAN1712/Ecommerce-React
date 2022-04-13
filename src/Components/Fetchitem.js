import React from "react";
import { Grid } from "@material-ui/core";

import Dataitem from "./Dataitem";
import { Container } from "react-bootstrap";

class Fetchitem extends React.Component {
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

    fetch("https://retoolapi.dev/hHfuhZ/data")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          Dataisloaded: true,
        });
      });

    this.setState({
      loading: false,
    });
  }

  render() {
    return (
      <div className="Itemmain">
        <Container>
          <Grid container justifyContent={"flex-start"}>
            {this.state.loading ? (
              <h1>loading</h1>
            ) : (
              this.state.items.map((items) => {
                return (
                  <Grid key={items.id} md={4} item>
                    <Dataitem name={items} />
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

export default Fetchitem;
