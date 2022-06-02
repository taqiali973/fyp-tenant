import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import { useRouter } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";
import LockResetIcon from "@mui/icons-material/LockReset";
import HotelIcon from "@mui/icons-material/Hotel";
import axios from "axios";

export default function PoliceDashboard() {
  const [policeData, setPoliceData] = useState(null);

  const router = useRouter();
  useEffect(() => {
    fetchData();
  }, []);

  const api = "https://fyp-tenant.herokuapp.com/api/police/dashboard";

  let token = "";
  if (typeof window !== "undefined") {
    token = JSON.parse(localStorage.getItem("police")).token;
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(api, {
        headers: { Authorization: "Bearer " + token },
      });
      setPoliceData(response.data.station);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="tenant-first-div">
        <Grid container className="tenant-dashboard-container">
          <Grid item lg={2} className="lg-2">
            <Paper elevation={10} className="dashboard-tenant-paper">
              <div className="Content">
                <h6
                  className="TRVS"
                  onClick={() =>
                    router.push("/Landing-Pages/Main-Landing-Page")
                  }
                >
                  TRVS
                </h6>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "32%",
                  display: "flex",
                  alignItems: "center",
                  width: "6%",
                  justifyContent: "space-evenly",
                }}
              >
                <PersonIcon sx={{ color: "#FFFAF0" }} />
                <Typography
                  variant="p"
                  className="guest"
                  onClick={() => router.push("/Police-System/Tenants")}
                >
                  Tenants
                </Typography>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "38%",
                  display: "flex",
                  alignItems: "center",
                  width: "6%",
                  justifyContent: "space-evenly",
                }}
              >
                <HotelIcon sx={{ color: "#FFFAF0" }} />
                <Typography
                  variant="p"
                  className="guest"
                  onClick={() =>
                    router.push("/Police-System/Hotel-Information")
                  }
                >
                  Hotels
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={10} marginTop={"30px"}>
            <div className="welcome-tenant">
              <div>
                <Typography variant="h6" className="Dashboard-Heading">
                  Police Dashboard
                </Typography>
              </div>
              <div className="logout-icon">
                <Button
                  variant="contained"
                  onClick={() => router.push("/Tabs/Login-Tabs")}
                >
                  logout
                  <LogoutIcon />
                </Button>
              </div>
            </div>

            <div className="your-information-section">
              <Grid container>
                <Grid item lg={4}></Grid>
                <Grid item lg={4} marginBottom={"150px"}></Grid>
                <Grid item lg={4}></Grid>
                <Grid item lg={1}></Grid>
                <Grid item lg={6}>
                  <Paper elevation={10} className="paper">
                    <div className="main-div">
                      {policeData ? (
                        <div
                          className="information-heading"
                          style={{
                            background: "gainsboro",
                            marginTop: "-10px",
                          }}
                        >
                          <h2
                            style={{
                              marginLeft: "50px",
                            }}
                          >
                            Station Information
                          </h2>
                          <div className="person-icon">
                            <PersonIcon />
                          </div>
                        </div>
                      ) : (
                        <div>
                          <p>No information</p>
                        </div>
                      )}

                      <div className="tenant-information">
                        <div className="info">
                          <Grid container>
                            <Grid item lg={6}>
                              <p>Station Name : Waris Khan</p>
                            </Grid>
                            <Grid item lg={6}>
                              <p>SHO Name : Mujawar Ali</p>
                            </Grid>
                            <Grid item lg={6}>
                              {" "}
                              <p>Station Email : 123@gmail.com</p>
                            </Grid>
                            <Grid item lg={6}>
                              {" "}
                              <p>Station Address : Murree Road Rawalpindi</p>
                            </Grid>
                            <Grid item lg={6}>
                              {" "}
                              <p> SHO Cnic : 34789-8763459-9</p>
                            </Grid>
                            <Grid item lg={6}>
                              {" "}
                              <p>Station Phone : 051-9846652</p>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid
                  item
                  lg={5}
                  display={"flex"}
                  justifyContent={"center"}
                  marginTop={"60px"}
                >
                  <Paper elevation={10} className="paper-style">
                    <Grid align="center">
                      <Avatar className="avatarStyle">
                        <LockResetIcon />
                      </Avatar>
                      <h4
                        style={{
                          marginTop: "10px",
                          color: "rgb(80 74 74)",
                        }}
                      >
                        Change Password
                      </h4>
                    </Grid>
                    {/* TextField */}
                    <form autoComplete="off" noValidate>
                      <TextField
                        id="standard-basic"
                        label="old password"
                        variant="outlined"
                        fullWidth
                        required
                        type="password"
                      />
                      <br />
                      <br />

                      <TextField
                        id="standard-basic"
                        label=" new Password"
                        variant="outlined"
                        fullWidth
                        required
                        type="password"
                      />
                      <br />
                      <br />
                      <TextField
                        id="standard-basic"
                        label=" repeat Password"
                        variant="outlined"
                        fullWidth
                        required
                        type="password"
                      />
                      <br />
                      <br />
                      {/* Button */}
                      <Button
                        className="btnStyle"
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Change
                      </Button>
                    </form>
                  </Paper>
                </Grid>

                <Grid item lg={1}></Grid>
                <Grid item lg={6} className="residency-col">
                  <Paper elevation={10} className="paper">
                    <div className="main-div">
                      <div
                        className="information-heading"
                        style={{ background: "gainsboro", marginTop: "-10px" }}
                      >
                        <h2
                          style={{
                            marginLeft: "50px",
                          }}
                        >
                          Summary{" "}
                        </h2>
                        <div className="person-icon">
                          <PersonIcon />
                        </div>
                      </div>
                      <div className="tenant-information">
                        <div className="info">
                          <Grid container>
                            <Grid item lg={6}>
                              <p>New Tenants : 4</p>
                            </Grid>
                            <Grid item lg={6}>
                              <p>Total Tenants : 10</p>
                            </Grid>
                            <Grid item lg={6}>
                              {" "}
                              <p>New Hotels : 4</p>
                            </Grid>
                            <Grid item lg={6}>
                              {" "}
                              <p>Total Hotels : 20</p>
                            </Grid>
                            <Grid item lg={6}>
                              {" "}
                              <p> Total Guests : 40</p>
                            </Grid>
                            <Grid item lg={6}>
                              {" "}
                              <p>Monthly Guests</p>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item lg={5}></Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

{
  /* <Paper elevation={10} className="paper">
<div className="main-div">
  <div className="information-heading">
    <h2
      style={{
        marginLeft: "50px",
      }}
    >
      Station Information
    </h2>
    <div className="person-icon">
      <PersonIcon />
    </div>
  </div>
  <div className="tenant-information">
    <div className="info">
      <Grid container>
        <Grid item lg={6}>
          <p>Station Name : Waris Khan</p>
        </Grid>
        <Grid item lg={6}>
          <p>SHO Name : Mujawar Ali</p>
        </Grid>
        <Grid item lg={6}>
          {" "}
          <p>Station Email : 123@gmail.com</p>
        </Grid>
        <Grid item lg={6}>
          {" "}
          <p>Station Address : Murree Road Rawalpindi</p>
        </Grid>
        <Grid item lg={6}>
          {" "}
          <p> SHO Cnic : 34789-8763459-9</p>
        </Grid>
        <Grid item lg={6}>
          {" "}
          <p>Station Phone : 051-9846652</p>
        </Grid>
      </Grid>
    </div>
  </div>
</div>
</Paper> */
}
{
  /* <Paper elevation={10} className="paper">
<div className="main-div">
  <div className="information-heading">
    <h2
      style={{
        marginLeft: "50px",
      }}
    >
      Summary{" "}
    </h2>
    <div className="person-icon">
      <PersonIcon />
    </div>
  </div>
  <div className="tenant-information">
    <div className="info">
      <Grid container>
        <Grid item lg={6}>
          <p>New Tenants : 4</p>
        </Grid>
        <Grid item lg={6}>
          <p>Total Tenants : 10</p>
        </Grid>
        <Grid item lg={6}>
          {" "}
          <p>New Hotels : 4</p>
        </Grid>
        <Grid item lg={6}>
          {" "}
          <p>Total Hotels : 20</p>
        </Grid>
        <Grid item lg={6}>
          {" "}
          <p> Total Guests : 40</p>
        </Grid>
        <Grid item lg={6}>
          {" "}
          <p>Monthly Guests</p>
        </Grid>
      </Grid>
    </div>
  </div>
</div>
</Paper> */
}
