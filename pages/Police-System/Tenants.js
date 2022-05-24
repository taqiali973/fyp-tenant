import React, { useState } from "react";
import { Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import NavBar from "../Landing-Pages/Nav-Bar";
import CurrentTenants from "../CurrentTenants";
import NewTenants from "../NewTenants";
import TenantHistory from "../TenantHistory";
export default function Tenants() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <NavBar />
      <div
        style={{
          marginTop: "5%",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Grid container>
          <Grid item xl={12}>
            <div
              style={{
                width: "50%",
                margin: "0 auto",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Link
                component="button"
                variant="body2"
                underline="none"
                onClick={() => setValue(0)}
              >
                <Typography style={{ color: value === 0 ? "blue" : "black" }}>
                  Current Tenants
                </Typography>
              </Link>
              <Link
                component="button"
                variant="body2"
                underline="none"
                onClick={() => setValue(1)}
              >
                <Typography style={{ color: value === 1 ? "blue" : "black" }}>
                  New Tenants{" "}
                </Typography>
              </Link>
              <Link
                component="button"
                variant="body2"
                underline="none"
                onClick={() => setValue(2)}
              >
                <Typography style={{ color: value === 2 ? "blue" : "black" }}>
                  Tenants History{" "}
                </Typography>
              </Link>
            </div>
          </Grid>
        </Grid>
        {value === 0 && <CurrentTenants />}
        {value === 1 && <NewTenants />}
        {value === 2 && <TenantHistory />}
      </div>
    </div>
  );
}
{
  /* <div
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
          </Grid>
        </Paper>
      </div> */
}

{
  /* 
        -----2ND PAPER------ */
}
{
  /* <Paper elevation={10} style={paperStyle}>
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
          </Grid>
        </Paper> */
}

{
  /* -----3RD Paper---- */
}
{
  /* <Paper elevation={10} style={paperStyle}>
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
          </Grid>
        </Paper> */
}

{
  /* ---4TH Paper--- */
}

/* <Paper elevation={10} style={paperStyle}>
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
          </Grid>
        </Paper> */
