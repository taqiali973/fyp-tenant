import React from "react";
import LandingPage from "./Landing-Page";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function TenantSignUp() {
  const router = useRouter();

  const paperStyle = {
    padding: 30,
    width: 700,
    height: "60%",
    borderRadius: "30px",
    background: "rgb(242 238 238)",
  };

  const avatarStyle = {
    backgroundColor: "#1a1515",
    margin: "10px 0",
  };
  const btnStyle = {
    borderRadius: "10px",
  };

  return (
    <div>
      <LandingPage />

      <div
        style={{
          marginTop: "64px",
          width: "100vw",
          height: "93vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",

          background: "rgb(141 136 136)",
        }}
      >
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AccountCircleIcon />
            </Avatar>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "cursive",
              }}
            >
              Sign Up
            </Typography>
            <form autoComplete="off" noValidate>
              <Grid container>
                <Grid item lg={6} style={{ marginTop: "30px" }}>
                  <TextField
                    label="Name"
                    placeholder="Enter Name"
                    variant="outlined"
                    required
                    type="text"
                  />
                </Grid>

                <Grid item lg={6} style={{ marginTop: "30px" }}>
                  <TextField
                    label="FatherName"
                    placeholder="Enter FatherName"
                    variant="outlined"
                    required
                    type="text"
                  />
                </Grid>

                <Grid item lg={6} style={{ marginTop: "30px" }}>
                  <TextField
                    label="Cnic"
                    placeholder="Enter Cnic"
                    variant="outlined"
                    required
                    type="number"
                  />
                </Grid>

                <Grid item lg={6} style={{ marginTop: "30px" }}>
                  <TextField
                    label="Phone"
                    placeholder="Enter Phone"
                    variant="outlined"
                    required
                    type="number"
                  />
                </Grid>

                <Grid item lg={6} style={{ marginTop: "30px" }}>
                  <TextField
                    label="Email"
                    placeholder="Enter Email"
                    variant="outlined"
                    required
                    type="email"
                  />
                </Grid>

                <Grid item lg={6} style={{ marginTop: "30px" }}>
                  <TextField
                    label="Password"
                    placeholder="Enter Password"
                    variant="outlined"
                    required
                    type="password"
                  />
                </Grid>
                <Grid item lg={12} style={{ marginTop: "60px" }}>
                  <Button
                    style={btnStyle}
                    sx={{
                      fontFamily: "cursive",
                      background: "rgb(79 79 79)",
                    }}
                    type="submit"
                    variant="contained"
                    onClick={() =>
                      router.push({
                        pathname: "/Login-Tabs",
                        query: { activeTab: "tenant" },
                      })
                    }
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
