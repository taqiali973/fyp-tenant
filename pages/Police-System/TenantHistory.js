import React from "react";
import { Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const paperStyle = {
  marginBottom: "100px",
};
export default function TenantHistory() {
  return (
    <div>
      <div
        style={{
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid container></Grid>
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
          <Grid container>
            <Grid
              item
              xl={11}
              // border={"2px solid red"}
              display={"flex"}
              alignItems={"center"}
              paddingTop={"5px"}
              margin={"0 auto"}
            >
              <AccountCircleIcon sx={{ fontSize: "40px" }} />
              <p style={{ marginLeft: "4px" }}>Tenant Info</p>
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
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Exit Date : 12-9-2020</p>
              </div>
            </Grid>
          </Grid>
        </Paper>

        {/* 
        -----2ND PAPER------ */}
        <Paper elevation={10} style={paperStyle}>
          <Grid container>
            <Grid
              item
              xl={11}
              // border={"2px solid red"}
              display={"flex"}
              alignItems={"center"}
              paddingTop={"5px"}
              margin={"0 auto"}
            >
              <AccountCircleIcon sx={{ fontSize: "40px" }} />
              <p style={{ marginLeft: "4px" }}>Tenant Info</p>
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
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Exit Date : 12-9-2020</p>
              </div>
            </Grid>
          </Grid>
        </Paper>

        {/* -----3RD Paper---- */}
        <Paper elevation={10} style={paperStyle}>
          <Grid container>
            <Grid
              item
              xl={11}
              // border={"2px solid red"}
              display={"flex"}
              alignItems={"center"}
              paddingTop={"5px"}
              margin={"0 auto"}
            >
              <AccountCircleIcon sx={{ fontSize: "40px" }} />
              <p style={{ marginLeft: "4px" }}>Tenant Info</p>
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
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Exit Date : 12-9-2020</p>
              </div>
            </Grid>
          </Grid>
        </Paper>

        {/* ---4TH Paper--- */}
        <Paper elevation={10} style={paperStyle}>
          <Grid container>
            <Grid
              item
              xl={11}
              // border={"2px solid red"}
              display={"flex"}
              alignItems={"center"}
              paddingTop={"5px"}
              margin={"0 auto"}
            >
              <AccountCircleIcon sx={{ fontSize: "40px" }} />
              <p style={{ marginLeft: "4px" }}>Tenant Info</p>
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
            <Grid item xl={4}>
              <div style={{ marginLeft: "40px" }}>
                <p>Exit Date : 12-9-2020</p>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
