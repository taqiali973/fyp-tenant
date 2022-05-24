import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import NavBar from "../Landing-Pages/Nav-Bar";
import Index from "./Guest-List/Index";
import IndexTwo from "./Guest-History/IndexTwo";
import Button from "@mui/material/Button";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useRouter } from "next/router";

export default function guestInformation() {
  const router = useRouter();

  const [value, setValue] = useState(0);
  return (
    <>
      <NavBar />
      <Grid container marginTop={"5%"}>
        <Grid item lg={12} marginLeft={"50px"}>
          <Button
            variant="contained"
            onClick={() => router.push("/Hotel-System/Hotel-Dashboard")}
          >
            <ArrowLeftIcon sx={{ fontSize: "30px", cursor: "pointer" }} />
          </Button>
        </Grid>
        <Grid item lg={4}></Grid>
        <Grid item lg={2} textAlign="center">
          <Button
            variant="contained"
            onClick={() => setValue(0)}
            style={{ backgroundColor: value === 0 ? "green" : "red" }}
          >
            Guest List
          </Button>
        </Grid>
        <Grid item lg={6}>
          <Button
            variant="contained"
            onClick={() => setValue(1)}
            style={{ backgroundColor: value === 1 ? "green" : "red" }}
          >
            Guest History
          </Button>
        </Grid>
      </Grid>
      {value === 0 && <Index />}
      {value === 1 && <IndexTwo />}
    </>
  );
}
