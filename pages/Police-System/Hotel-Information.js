import React, { useState } from "react";
import HotelTable from "./HotelTable";
import NewHotels from "./NewHotels";
import Button from "@mui/material/Button";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useRouter } from "next/router";

import { Grid, Typography } from "@mui/material";
export default function HotelInformation() {
  const router = useRouter();

  const [value, setValue] = useState(0);
  return (
    <>
      <div>
        <Grid container>
          <Grid item lg={4} textAlign="center" marginTop={"40px"}>
            <Button
              variant="contained"
              onClick={() => router.push("/Police-System/Police-dashboard")}
            >
              <ArrowLeftIcon />
            </Button>
          </Grid>
          <Grid item lg={4} textAlign="center"></Grid>
          <Grid item lg={4}></Grid>

          <Grid item lg={4}></Grid>
          <Grid
            item
            lg={4}
            backgroundColor={"#808080"}
            textAlign="center"
            display={"flex"}
            justifyContent={"space-evenly"}
            padding={"10px"}
          >
            <Typography
              variant="h6"
              // style={{ color: "#F0F8FF" }}
              style={{ color: "#DCDCDC", cursor: "pointer" }}
              onClick={() => setValue(0)}
              className={value === 0 ? "active" : ""}
            >
              New Hotel
            </Typography>

            <Typography
              variant="h6"
              onClick={() => setValue(1)}
              style={{ color: "#DCDCDC", cursor: "pointer" }}
              className={value === 1 ? "active" : ""}
            >
              Hotel List
            </Typography>
          </Grid>
        </Grid>
      </div>
      {value === 1 && <HotelTable />}
      {value === 0 && <NewHotels />}
    </>
  );
}
