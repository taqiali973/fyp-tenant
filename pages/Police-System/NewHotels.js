import React from "react";
import { Grid, Paper } from "@mui/material";
import { useRouter } from "next/router";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function NewHotels() {
  const router = useRouter();
  return (
    <div>
      <Grid container marginTop={"90px"}>
        <Grid item lg={3}></Grid>
        <Grid item lg={6}>
          <Paper elevation={10}>
            <div className="main-div">
              <div className="information-heading">
                <h2
                  style={{
                    marginLeft: "50px",
                  }}
                >
                  Hotel Information
                </h2>
                <div className="person-icon">
                  <Tooltip title="verify">
                    <IconButton>
                      <VerifiedUserIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
              <div className="tenant-information">
                <div className="info">
                  <Grid container>
                    <Grid item lg={6}>
                      <p>Name : PC</p>
                    </Grid>
                    <Grid item lg={6}>
                      <p>Email : 123@gmail.com</p>{" "}
                    </Grid>
                    <Grid item lg={6}>
                      {" "}
                      <p>Phone : 0324-9846652</p>
                    </Grid>
                    <Grid item lg={6}>
                      {" "}
                      <p>Total Rooms : 56</p>
                    </Grid>
                    <Grid item lg={6}>
                      {" "}
                      <p>Address : Rawalpindi</p>
                    </Grid>
                    <Grid item lg={6}>
                      {" "}
                      <p>Current Guests : 40</p>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={3}></Grid>
      </Grid>
      <Grid container marginTop={"90px"}>
        <Grid item lg={3}></Grid>
        <Grid item lg={6}>
          <Paper elevation={10}>
            <div className="main-div">
              <div className="information-heading">
                <h2
                  style={{
                    marginLeft: "50px",
                  }}
                >
                  Owner Information
                </h2>
                <div className="person-icon">
                  <Tooltip title="verify">
                    <IconButton>
                      <VerifiedUserIcon />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
              <div className="tenant-information">
                <div className="info">
                  <Grid container>
                    <Grid item lg={6}>
                      <p>Name : Malik Shahid Awan</p>
                    </Grid>
                    <Grid item lg={6}>
                      <p>Father Name : Malik Atif Awan</p>{" "}
                    </Grid>
                    <Grid item lg={6}>
                      {" "}
                      <p>Phone : 0324-9846652</p>
                    </Grid>
                    <Grid item lg={6}>
                      {" "}
                      <p>Cnic : 37690-9846652-6</p>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
        <Grid item lg={3}></Grid>
      </Grid>
    </div>
  );
}
