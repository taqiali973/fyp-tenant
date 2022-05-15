import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";

export default function StationInfo() {
  return (
    <Paper
      elevation={10}
      style={{
        width: "70%",
        margin: "60px auto",
      }}
    >
      <Grid container align="center" bgcolor={"rgb(79 79 79)"}>
        <Grid item lg={6}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography variant="h5" color={"#fff"}>
              Station Info
            </Typography>
          </div>
        </Grid>
        <Grid item lg={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "2px",
              marginLeft: "10px",
            }}
          >
            <LocalPoliceIcon sx={{ color: "#fff" }} />
          </div>
        </Grid>
      </Grid>
      <Grid container bgcolor={"rgb(241,241,241)"}>
        <Grid item lg={6} align="center">
          <h3>Station_name : Westridge Station</h3>
          <h3>Station_Phone : 051-765468</h3>
          <h3>Station_Email : station123@gmail.com</h3>
        </Grid>
        <Grid item lg={6} align="center">
          <h3>SHO name : Raja Afzal khan</h3>
          <h3>SHO cnic : 37405-0987367-9</h3>
          <h3>Station_Address : Westridge 3, Chour Harpal Rwp Cantt </h3>
        </Grid>
      </Grid>
    </Paper>
  );
}
