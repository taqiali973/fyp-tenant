import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import LandingPage from "./Landing-Page";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const paperStyle = {
  marginBottom: "100px",
};
export default function CurrentTenants() {
  return (
    <div>
      <LandingPage />
      <div
        style={{
          marginTop: "3%",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid container>
          <Grid item xl={12} textAlign="center">
            <Typography>Current Tenants</Typography>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          marginTop: "3%",
          marginLeft: "auto",
          marginRight: "auto",
          width: "80%",
        }}
      >
        <Paper elevation={10} style={paperStyle}>
          <Grid container padding={"10px 40px"}>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Name : Taqi Ali</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Email : 123@gmail.com</p>
              </div>
            </Grid>

            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Cnic : 9854345689</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Father Name : Mujawar Ali</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Phone : 0329876789</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Address : xyz City </p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Name : Steve</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Cnic : 34565434</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Father : Bob</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Phone : 0875445678</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Entry Date : 20-2-2020</p>
              </div>
            </Grid>
          </Grid>
        </Paper>

        {/* 
        -----2ND PAPER------ */}
        <Paper elevation={10} style={paperStyle}>
          <Grid container padding={"0 40px"}>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Name : Taqi Ali</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Email : 123@gmail.com</p>
              </div>
            </Grid>

            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Cnic : 9854345689</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Father Name : Mujawar Ali</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Phone : 0329876789</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Address : xyz City </p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Name : Steve</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Cnic : 34565434</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Father : Bob</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Phone : 0875445678</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Entry Date : 20-2-2020</p>
              </div>
            </Grid>
          </Grid>
        </Paper>

        {/* -----3RD Paper---- */}
        <Paper elevation={10} style={paperStyle}>
          <Grid container padding={"0 40px"}>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Name : Taqi Ali</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Email : 123@gmail.com</p>
              </div>
            </Grid>

            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Cnic : 9854345689</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Father Name : Mujawar Ali</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Phone : 0329876789</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Address : xyz City </p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Name : Steve</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Cnic : 34565434</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Father : Bob</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Phone : 0875445678</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Entry Date : 20-2-2020</p>
              </div>
            </Grid>
          </Grid>
        </Paper>

        {/* ---4TH Paper--- */}
        <Paper elevation={10} style={paperStyle}>
          <hr />
          <Grid container padding={"0 40px"}>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Name : Taqi Ali</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Email : 123@gmail.com</p>
              </div>
            </Grid>

            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Cnic : 9854345689</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Father Name : Mujawar Ali</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Phone : 0329876789</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Address : xyz City </p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Name : Steve</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Cnic : 34565434</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Father : Bob</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Owner Phone : 0875445678</p>
              </div>
            </Grid>
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Entry Date : 20-2-2020</p>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
