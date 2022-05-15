import React, { useState } from "react";
import LandingPage from "./Landing-Page";
import Grid from "@mui/material/Grid";
import StationInfo from "./Station-Info";
import Tenants from "./Tenants";
import Hotels from "./Hotels";
import { Paper, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import TenantsResidency from "./Tenants-Residency";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PersonIcon from "@mui/icons-material/Person";
import HotelIcon from "@mui/icons-material/Hotel";
import LockResetIcon from "@mui/icons-material/LockReset";

export default function PoliceDashboard() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <LandingPage />
      <div
        style={{
          width: "100%",
          marginTop: "100px",
        }}
      >
        <Grid
          container
          width={"50%"}
          margin={"0 auto"}
          justifyContent={"center"}
        >
          <Grid
            item
            lg={4}
            bgcolor={"rgb(79 79 79)"}
            display={"flex"}
            justifyContent={"center"}
            border={"2px solid white"}
          >
            <div style={{ marginTop: "2px" }}>
              <PersonIcon sx={{ color: "#fff", fontSize: "30px" }} />
            </div>
            <div style={{ marginTop: "4px" }}>
              <Link
                component="button"
                variant="h6"
                onClick={() => setValue(1)}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Tenants
              </Link>
            </div>
          </Grid>

          <Grid
            item
            lg={4}
            bgcolor={"rgb(79 79 79)"}
            display={"flex"}
            justifyContent={"center"}
            border={"2px solid white"}
          >
            <div style={{ marginTop: "2px" }}>
              <HotelIcon
                sx={{ color: "#fff", fontSize: "30px", marginRight: "5px" }}
              />
            </div>
            <div style={{ marginTop: "4px" }}>
              <Link
                component="button"
                variant="h6"
                onClick={() => setValue(3)}
                style={{ textDecoration: "none", color: "#fff" }}
              >
                Hotels
              </Link>
            </div>
          </Grid>
          <Grid
            item
            lg={4}
            bgcolor={"rgb(79 79 79)"}
            display={"flex"}
            justifyContent={"center"}
            border={"2px solid white"}
          >
            <div style={{ marginTop: "2px" }}>
              <LockResetIcon sx={{ color: "#fff", fontSize: "30px" }} />
            </div>
            <div style={{ marginTop: "4px" }}>
              <Link
                component="button"
                variant="h6"
                onClick={() => setValue(3)}
                style={{
                  textDecoration: "none",
                  color: "#fff",
                  marginRight: "3px",
                }}
              >
                Change Password
              </Link>
            </div>
          </Grid>
        </Grid>

        <div style={{ marginTop: "60px" }}>
          <StationInfo />
          <Paper
            elevation={10}
            style={{
              width: "50%",
              margin: "0 auto",
              background: "rgb(241,241,241)",
              borderRadius: "30px",
            }}
          >
            <Grid container>
              <Grid
                item
                lg={6}
                align="center"
                display={"flex"}
                justifyContent={"flex-end"}
                bgcolor={"rgb(79,79,79)"}
                color={"#fff"}
              >
                <Typography variant="h5">Summary</Typography>
              </Grid>
              <Grid item lg={6} bgcolor={"rgb(79,79,79)"}>
                <div style={{ marginLeft: "20px", marginTop: "2px" }}>
                  <SummarizeIcon style={{ color: "#fff" }} />
                </div>
              </Grid>

              <Grid item lg={6} align="center">
                <h3>New Tenants : 2</h3>

                <h3>Hotels : 6</h3>
                <h3>Total Guests : 80</h3>
              </Grid>
              <Grid item lg={6} align="center">
                <h3>Total Tenants : 20</h3>
                <h3>Total Hotels : 30</h3>
                <h3>Monthly Tenants :222</h3>
              </Grid>
            </Grid>
          </Paper>
        </div>
        <div>{value === 1 && <Tenants />}</div>
        <div>{value === 2 && <TenantsResidency />}</div>
        <div>{value === 3 && <Hotels />}</div>
      </div>
    </div>
  );
}
