import Header from "../../components/Header/Header";
import React from "react";
import Fixtures from "../../components/Fixtures/Fixtures";
import { Grid } from "@mui/material";
import Standings from "../../components/Standings/Standings";

const Home = () => {
  return (
    <div>
      <Header />
      <Grid container justifyContent="center">
        <Grid item lg={6} sx={{ display: "flex", justifyContent: "center" }}>
          <Fixtures />
        </Grid>
        <Grid item lg={6}>
          <Standings />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
