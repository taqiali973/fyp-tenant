import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import GppMaybeIcon from "@mui/icons-material/GppMaybe";
import { useRouter } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";
import LockResetIcon from "@mui/icons-material/LockReset";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";

export default function TenantDashboard() {
  const [tenant, setTenant] = useState(null);
  const [residency, setResidency] = useState();
  useEffect(() => {
    fetchData();
  }, []);

  const api = "https://fyp-tenant.herokuapp.com/api/tenant/dashboard";

  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(api, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response.data);
      const { tenant } = response.data;
      const { residence } = response.data;
      setTenant(tenant);
      setResidency(residence);
    } catch (error) {
      console.log(error);
    }
  };

  const router = useRouter();

  return (
    <div>
      <div className="tenant-first-div">
        {/* <NavBar /> */}
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
            </Paper>
          </Grid>
          <Grid item lg={10} marginTop={"30px"}>
            <div className="welcome-tenant">
              <div>
                <Typography variant="h6" className="Dashboard-Heading">
                  Tenant Dashboard
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
                  <Paper
                    elevation={10}
                    className="paper"
                    style={{ borderRadius: "10px" }}
                  >
                    <div className="main-div">
                      <div className="information-heading">
                        <h2
                          style={{
                            marginLeft: "50px",
                          }}
                        >
                          Your Information
                        </h2>
                        <div className="person-icon">
                          <PersonIcon />
                        </div>
                      </div>
                      {tenant ? (
                        <div
                          className="tenant-information"
                          // style={{ border: "2px solid red" }}
                        >
                          <div className="info">
                            <Grid container align="center">
                              <Grid item lg={6}>
                                <p>Name : {tenant.name}</p>
                              </Grid>
                              <Grid item lg={6}>
                                <p>Father Name : {tenant.father}</p>
                              </Grid>
                              <Grid item lg={6}>
                                {" "}
                                <p> Email :{tenant.email}</p>
                              </Grid>

                              <Grid item lg={6}>
                                {" "}
                                <p> Cnic : {tenant.cnic}</p>
                              </Grid>
                              <Grid item lg={6}>
                                {" "}
                                <p>Phone : {tenant.phone}</p>
                              </Grid>
                            </Grid>
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <p>Information not found</p>
                        </div>
                      )}
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
                  <Paper elevation={10} className="paper-residency">
                    <div className="section-residency">
                      <div className="residency-content">Residency</div>
                      <div
                        style={{
                          width: "36%",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Button variant="contained">
                          <VerifiedUserIcon sx={{ marginRight: "5px" }} />
                          Verified
                        </Button>
                        <Button variant="contained">
                          <GppMaybeIcon sx={{ marginRight: "5px" }} />
                          UnVerify
                        </Button>
                      </div>
                      <div className="add">
                        <div className="remove">
                          {residency === null ? (
                            <Button
                              variant="contained"
                              onClick={() =>
                                router.push("/Tenant-System/Add-Residency")
                              }
                            >
                              <AddIcon />
                              Add
                            </Button>
                          ) : (
                            <Button variant="contained">
                              <RemoveIcon />
                              Remove
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="no-residency-added">No Residency Added</div>
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
