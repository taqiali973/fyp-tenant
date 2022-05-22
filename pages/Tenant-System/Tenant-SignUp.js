import React from "react";
import NavBar from "../Landing-Pages/Nav-Bar";
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

  return (
    <div>
      <NavBar />

      <div className="tenant-signUp-div">
        <Paper elevation={10} className="paperStyle">
          <Grid container>
            <Grid item lg={12} textAlign={"center"}>
              <AccountCircleIcon sx={{ fontSize: "40px" }} />
            </Grid>
            <Grid item lg={12} textAlign={"center"}>
              signUp
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={12} paddingTop={"20px"}>
              <form autoComplete="off" noValidate>
                <div className="residency-form">
                  <TextField
                    label="Name"
                    placeholder="Name"
                    required
                    type="text"
                    variant="standard"
                  />

                  <TextField
                    label="Father_Name"
                    placeholder=" Father_Name"
                    variant="standard"
                    required
                    type="text"
                  />
                </div>
                <br />
                <br />

                <div className="residency-form">
                  <TextField
                    label="Cnic"
                    placeholder="Cnic"
                    variant="standard"
                    required
                    type="number"
                  />
                  <TextField
                    label="Phone"
                    placeholder="Enter Phone"
                    variant="standard"
                    required
                    type="number"
                  />
                </div>
                <br />
                <br />

                <div className="residency-form">
                  <TextField
                    label="Email"
                    placeholder="Email"
                    variant="standard"
                    required
                    type="text"
                  />
                  <TextField
                    variant="standard"
                    label="password"
                    placeholder="password"
                    required
                  />
                </div>
              </form>
            </Grid>

            <Grid
              item
              lg={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              marginTop={"40px"}
            >
              <Button
                variant="contained"
                onClick={() =>
                  router.push({
                    pathname: "Tabs/Login-Tabs",
                    query: { activeTab: "tenant" },
                  })
                }
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          <br />
          <br />
        </Paper>
      </div>
    </div>
  );
}
