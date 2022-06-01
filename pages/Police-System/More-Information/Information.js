import React, { useState } from "react";
import NavBar from "../../Landing-Pages/Nav-Bar";
import { Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/router";
import Tenants from "../Tenants";
import HotelTable from "../HotelTable";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

export default function Information() {
  const router = useRouter();

  const [value, setValue] = useState(0);
  return (
    <div>
      <NavBar />

      <Grid container marginTop={"70px"}>
        <Grid item lg={2} marginTop={"20px"} textAlign="right">
          <Button
            variant="contained"
            onClick={() => router.push("/Police-System/Police-dashboard")}
          >
            <ArrowLeftIcon />
            Back
          </Button>
        </Grid>
        <Grid item lg={10}></Grid>

        {/* Headings */}
        <Grid item lg={4}></Grid>
        <Grid item lg={2} textAlign="center">
          <div style={{ width: "50%", margin: "0 auto" }}>
            {" "}
            <Typography
              variant="h6"
              onClick={() => setValue(0)}
              style={{ cursor: "pointer" }}
              className={value === 0 ? "borderBottom" : ""}
            >
              Tenants
            </Typography>
          </div>
        </Grid>
        <Grid item lg={2} textAlign="center">
          <div style={{ width: "40%", margin: "0 auto" }}>
            <Typography
              variant="h6"
              onClick={() => setValue(1)}
              style={{ cursor: "pointer" }}
              className={value === 1 ? "borderBottom" : ""}
            >
              Hotels
            </Typography>
          </div>
        </Grid>
      </Grid>
      {value === 0 && <Tenants />}
      {value === 1 && <HotelTable />}
    </div>
  );
}
