import React from "react";
import NavBar from "../Landing-Pages/Nav-Bar";
import Grid from "@mui/material/Grid";
import StationInfo from "../Station-Info";
import { Paper, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import SummarizeIcon from "@mui/icons-material/Summarize";
import PersonIcon from "@mui/icons-material/Person";
import HotelIcon from "@mui/icons-material/Hotel";
import LockResetIcon from "@mui/icons-material/LockReset";
// import HotelList from "./policeHotel";
import { useRouter } from "next/router";

export default function PoliceDashboard() {
  const router = useRouter();

  return (
    <div>
      <NavBar />
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
                // onClick={() => setValue(1)}
                onClick={() => router.push("/Police-System/Tenants")}
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
                onClick={() => router.push("/policeHotel")}
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
                // onClick={() => setValue(3)}
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
            }}
          >
            <Grid container>
              <Grid
                item
                lg={5}
                display={"flex"}
                justifyContent={"flex-end"}
                bgcolor={"rgb(79,79,79)"}
                // border={"2px solid red"}
              >
                <SummarizeIcon style={{ color: "#fff", marginTop: "5px" }} />
              </Grid>
              <Grid
                item
                lg={7}
                bgcolor={"rgb(79,79,79)"}
                // border={"2px solid red"}
              >
                <div style={{ marginLeft: "10px", marginTop: "2px" }}>
                  <Typography variant="h5" color={"#fff"}>
                    Summary
                  </Typography>
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
        {/* <div>{value === 1 && <Tenants />}</div> */}
        {/* <div>{value === 2 && <TenantsResidency />}</div>
        <div>{value === 3 && <Hotels />}</div> */}
      </div>
    </div>
  );
}
