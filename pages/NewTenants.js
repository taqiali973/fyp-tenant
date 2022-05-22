import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import LandingPage from "./Landing-Page";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const paperStyle = {
  marginBottom: "100px",
};
export default function NewTenants() {
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
            <Typography>New Tenants</Typography>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          marginTop: "3%",
          marginLeft: "auto",
          marginRight: "auto",
          width: "75%",
        }}
      >
        <Paper elevation={10} style={paperStyle}>
          <Grid container>
            <Grid item xl={6} marginTop={"20px"}>
              <div
                style={{
                  width: "80%",
                  margin: "0 auto",
                  // border: "2px solid red",
                  display: "flex",
                }}
              >
                <AccountCircleIcon sx={{ fontSize: "40px" }} />
                <p style={{ marginLeft: "4px" }}>Tenant Info</p>
              </div>
            </Grid>
            <Grid item xl={6} marginTop={"20px"}>
              <div
                style={{
                  width: "80%",
                  margin: "0 auto",
                  // border: "2px solid red",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Tooltip title="Delete">
                  <IconButton>
                    <VerifiedUserIcon sx={{ fontSize: "30px" }} />
                  </IconButton>
                </Tooltip>
              </div>
            </Grid>
          </Grid>
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

        {/* 
        -----2ND PAPER------ */}
        <Paper elevation={10} style={paperStyle}>
          <Grid container>
            <Grid item xl={6} marginTop={"20px"}>
              <div
                style={{
                  width: "80%",
                  margin: "0 auto",
                  // border: "2px solid red",
                  display: "flex",
                }}
              >
                <AccountCircleIcon sx={{ fontSize: "40px" }} />
                <p style={{ marginLeft: "4px" }}>Tenant Info</p>
              </div>
            </Grid>
            <Grid item xl={6} marginTop={"20px"}>
              <div
                style={{
                  width: "80%",
                  margin: "0 auto",
                  // border: "2px solid red",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Tooltip title="Delete">
                  <IconButton>
                    <VerifiedUserIcon sx={{ fontSize: "30px" }} />
                  </IconButton>
                </Tooltip>
              </div>
            </Grid>
          </Grid>
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

        {/* -----3RD Paper---- */}
        <Paper elevation={10} style={paperStyle}>
          <Grid container>
            <Grid item xl={6} marginTop={"20px"}>
              <div
                style={{
                  width: "80%",
                  margin: "0 auto",
                  // border: "2px solid red",
                  display: "flex",
                }}
              >
                <AccountCircleIcon sx={{ fontSize: "40px" }} />
                <p style={{ marginLeft: "4px" }}>Tenant Info</p>
              </div>
            </Grid>
            <Grid item xl={6} marginTop={"20px"}>
              <div
                style={{
                  width: "80%",
                  margin: "0 auto",
                  // border: "2px solid red",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Tooltip title="Delete">
                  <IconButton>
                    <VerifiedUserIcon sx={{ fontSize: "30px" }} />
                  </IconButton>
                </Tooltip>
              </div>
            </Grid>
          </Grid>
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

        {/* ---4TH Paper--- */}
        <Paper elevation={10} style={paperStyle}>
          <Grid container sx={{ background: "darkkhaki" }}>
            <Grid item xl={6} marginTop={"20px"}>
              <div
                style={{
                  width: "80%",
                  margin: "0 auto",
                  // border: "2px solid red",
                  display: "flex",
                }}
              >
                <AccountCircleIcon sx={{ fontSize: "40px", color: "white" }} />
                <p style={{ marginLeft: "4px" }}>Tenant Info</p>
              </div>
            </Grid>
            <Grid item xl={6} marginTop={"20px"}>
              <div
                style={{
                  width: "80%",
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Tooltip title="Delete">
                  <IconButton>
                    <VerifiedUserIcon sx={{ fontSize: "30px" }} />
                  </IconButton>
                </Tooltip>
              </div>
            </Grid>
          </Grid>
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
