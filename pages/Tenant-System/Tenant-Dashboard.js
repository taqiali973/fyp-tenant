import React from "react";
import { Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";
import DoneIcon from "@mui/icons-material/Done";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { useRouter } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";
import LockResetIcon from "@mui/icons-material/LockReset";
import PersonIcon from "@mui/icons-material/Person";
import NavBar from "../Landing-Pages/Nav-Bar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

export default function TenantDashboard() {
  const router = useRouter();

  return (
    <div>
      <div className="tenant-first-div">
        <NavBar />
        <Grid container className="tenant-dashboard-container">
          <Grid item lg={2} className="lg-2">
            <Paper elevation={10} className="dashboard-tenant-paper">
              <div>
                <br />
                <br />
                <br />
                <div className="tenant-heading">
                  <h1>T</h1>
                </div>

                <div className="tenant-heading">
                  <h1>R</h1>
                </div>

                <div className="tenant-heading">
                  <h1>V</h1>
                </div>

                <div className="tenant-heading">
                  <h1>S</h1>
                </div>
              </div>
              <br />
              <br />
              <div>
                <h1 style={{ textAlign: "center" }}>
                  <AccountCircleIcon className="dashboard-logo" />
                </h1>
                <h1 className="tenant-dashboard">Tenant Dashboard</h1>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={10}>
            <div className="welcome-tenant">
              <div>
                <h1>Welcome</h1>
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

            <div
              style={{
                height: "790px",
                background: "whitesmoke",
              }}
            >
              <Grid container paddingTop={"90px"}>
                <Grid item lg={6} sx={{ marginLeft: "30px" }}>
                  <Paper elevation={10} className="paper">
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
                      <div className="tenant-information">
                        <div className="info">
                          <Grid container>
                            <Grid item lg={6}>
                              <p>Name : Taqi Ali</p>
                            </Grid>
                            <Grid item lg={6}>
                              <p>Father_Name : Mujawar Ali</p>
                            </Grid>
                            <Grid item lg={6}>
                              {" "}
                              <p>Email : 123@gmail.com</p>
                            </Grid>
                            <Grid item lg={6}>
                              {" "}
                              <p>Cnic : 34789-8763459-9</p>
                            </Grid>
                            <Grid item lg={6}>
                              {" "}
                              <p>Phone : 0324-9846652</p>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </div>
                  </Paper>
                </Grid>

                <Grid
                  item
                  lg={6}
                  sx={{ marginLeft: "30px", marginTop: "40px" }}
                >
                  <Paper elevation={10} className="paper">
                    <div className="main-residency-div">
                      <div>
                        <Grid
                          container
                          style={{
                            width: "90%",
                            margin: "0 auto",
                          }}
                        >
                          <Grid item lg={2} className="residency">
                            Residency
                          </Grid>
                          <Grid item lg={4}>
                            <Button
                              variant="contained"
                              sx={{ marginRight: "3px" }}
                            >
                              <DoneIcon />
                            </Button>
                            <Button variant="contained">
                              Verified
                              <WarningAmberIcon sx={{ marginLeft: "3px" }} />
                            </Button>
                          </Grid>
                          <Grid item lg={6} textAlign="right">
                            <Button
                              variant="contained"
                              onClick={() =>
                                router.push("/Tenant-System/Add-Residency")
                              }
                              sx={{ marginRight: "3px" }}
                            >
                              ADD <AddIcon />
                            </Button>
                            <Button variant="contained">
                              Remove{" "}
                              <PersonRemoveIcon sx={{ marginLeft: "3px" }} />
                            </Button>
                          </Grid>
                        </Grid>

                        <Grid container>
                          <Grid item lg={1}></Grid>
                          <Grid item lg={5} style={{ margin: "30px 0px" }}>
                            No Residency Added
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  </Paper>
                </Grid>

                <Grid item lg={6} className="change-password-col">
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
                        variant="standard"
                        fullWidth
                        required
                        type="password"
                        // icon={<VisibilityIcon sx={{ color: "black" }} />}
                        // InputLabelProps={{
                        //   sx: {
                        //     // color: "black",
                        //     [`&.${inputLabelClasses.shrink}`]: {
                        //       color: "black",
                        //     },
                        //   },
                        // }}
                        // {...register("username", {
                        //   required: "username is required",
                        //   pattern: {
                        //     value:
                        //       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        //     message: "Invalid Email Address",
                        //   },
                        // })}
                        // error={!!errors?.username}
                        // helperText={errors?.username ? errors.username.message : null}
                      />
                      <br />
                      <br />

                      <TextField
                        id="standard-basic"
                        label=" new Password"
                        variant="standard"
                        fullWidth
                        required
                        type="password"
                      />
                      <br />
                      <br />
                      <TextField
                        id="standard-basic"
                        label=" repeat Password"
                        variant="standard"
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
                        onClick={() =>
                          router.push("/Tenant-System/Tenant-Dashboard")
                        }
                      >
                        Change
                      </Button>
                    </form>
                  </Paper>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
