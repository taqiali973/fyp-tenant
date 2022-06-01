import React from "react";
import { Button, Grid, Paper } from "@mui/material";
import NavBar from "../../../Landing-Pages/Nav-Bar";
import { useRouter } from "next/router";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

export default function Info() {
  const router = useRouter();
  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundColor: "whitesmoke",
          marginTop: "60px",
          height: "93vh",
        }}
      >
        <Grid container>
          <Grid item lg={3} textAlign="center" marginTop={"30px"}>
            <Button
              variant="contained"
              onClick={() => router.push("/Police-System/Hotel-Information")}
            >
              <ArrowLeftIcon /> Back
            </Button>
          </Grid>
          <Grid item lg={6} marginTop={"160px"}>
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
                  {/* <div className="person-icon">Hello</div> */}
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
          <Grid item lg={3} textAlign="center" marginTop={"30px"}>
            >
            <Button
              variant="contained"
              onClick={() =>
                router.push(
                  "/Police-System/Hotel-Custom-Pages/Pearl-Continental/Guest-Information/Guest-InformationTwo"
                )
              }
            >
              Guest Information
            </Button>
          </Grid>
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
                  {/* <div className="person-icon">Hello</div> */}
                </div>
                <div className="tenant-information">
                  <div className="info">
                    <Grid container>
                      <Grid item lg={6}>
                        <p>Name : PC</p>
                      </Grid>
                      <Grid item lg={6}>
                        <p>Father Name</p>{" "}
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
    </div>
  );
}
