import { Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import NavBar from "../../../../Landing-Pages/Nav-Bar";
import IndexThree from "../../../Hotel-Custom-Pages/Pearl-Continental/Guest-Information/Guest-History/IndexThree";
import IndexFour from "../../Pearl-Continental/Guest-Information/Guest-List/IndexFour";
import Button from "@mui/material/Button";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { useRouter } from "next/router";
import { Link } from "@mui/material";

export default function guestInformationTwo() {
  const router = useRouter();

  const [value, setValue] = useState(0);
  return (
    <>
      <NavBar />
      <Grid
        container
        marginTop={"70px"}
        style={{ backgroundColor: "whitesmoke" }}
      >
        <Grid item lg={4} textAlign="center" marginTop={"30px"}>
          <Button
            variant="contained"
            onClick={() =>
              router.push(
                "/Police-System/Hotel-Custom-Pages/Pearl-Continental/Info"
              )
            }
          >
            <ArrowLeftIcon sx={{ fontSize: "30px", cursor: "pointer" }} />
            Back
          </Button>
        </Grid>
        <Grid item lg={4}></Grid>
        <Grid item lg={4}></Grid>

        <Grid item lg={4}></Grid>
        <Grid item lg={2} textAlign="center">
          <Link
            component="button"
            variant="body2"
            underline="none"
            onClick={() => setValue(0)}
            style={{ color: "black", fontSize: "16px" }}
            className={value === 0 ? "borderBottom" : ""}
          >
            Guest List
          </Link>
        </Grid>

        <Grid item lg={6}>
          <Link
            component="button"
            variant="body2"
            underline="none"
            onClick={() => setValue(1)}
            style={{ color: "black", fontSize: "16px" }}
            className={value === 1 ? "borderBottom" : ""}
          >
            Guest History
          </Link>
        </Grid>
      </Grid>
      {value === 0 && <IndexFour />}
      {value === 1 && <IndexThree />}
    </>
  );
}
