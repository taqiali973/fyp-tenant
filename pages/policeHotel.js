import React from "react";
// import LandingPage from "./Landing-Page";
import NavBar from "./Landing-Pages/Nav-Bar";
import Link from "@mui/material/Link";
import HotelTable from "./HotelTable";
import { Grid, Typography } from "@mui/material";
export default function HotelList() {
  return (
    <>
      <NavBar />

      <div style={{ marginTop: "5%" }}>
        <Grid container>
          <Grid item xl={6} textAlign="center">
            New Hotel
          </Grid>
          <Grid item xl={6} textAlign="center">
            Hotel History
          </Grid>
        </Grid>
        <Grid container sx={{ margin: "30px" }}>
          <Grid item xl={12} textAlign="center">
            Hotel List
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xl={12}>
            <HotelTable />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
