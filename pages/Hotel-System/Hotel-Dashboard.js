import React, { useState } from "react";
import { Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ListIcon from "@mui/icons-material/List";
import HistoryIcon from "@mui/icons-material/History";
import { useRouter } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

export default function TenantDashboard() {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
                  width: "7%",
                  justifyContent: "space-evenly",
                }}
              >
                <ListIcon sx={{ color: "#FFFAF0" }} />
                <Typography
                  variant="p"
                  className="guest"
                  onClick={() => router.push("/Hotel-System/Guest-List/Index")}
                >
                  Guest List
                </Typography>
              </div>
              <div
                style={{
                  position: "absolute",
                  top: "38%",
                  display: "flex",
                  alignItems: "center",
                  width: "9%",
                  justifyContent: "space-evenly",
                }}
              >
                <HistoryIcon sx={{ color: "#FFFAF0" }} />
                <Typography
                  variant="p"
                  className="guest"
                  onClick={() =>
                    router.push("/Hotel-System/Guest-History/IndexTwo")
                  }
                >
                  Guest History
                </Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={10} marginTop={"30px"}>
            <div className="welcome-tenant">
              <div>
                <Typography variant="h6" className="Dashboard-Heading">
                  Hotel Dashboard
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

            <div className="hotel-container" style={{ height: "90vh" }}>
              <Grid container>
                <Grid item lg={3}></Grid>
                <Grid item lg={6}>
                  <Paper
                    elevation={10}
                    className="paper"
                    style={{
                      borderRadius: "10px",
                      marginTop: "100px",
                      paddingTop: "10px",
                    }}
                  >
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
                          <PersonIcon />
                        </div>
                        <div style={{ marginLeft: "40%" }}>
                          <Button variant="contained" onClick={handleClickOpen}>
                            Add Guest <AddIcon />
                          </Button>
                        </div>
                      </div>
                      <div className="tenant-information">
                        <div className="info">
                          <Grid container>
                            <Grid item lg={6}>
                              <p> Name : Taqi ALi</p>
                            </Grid>
                            <Grid item lg={6}>
                              <p>Phone : 0352-9875438</p>
                            </Grid>
                            <Grid item lg={6}>
                              {" "}
                              <p> Address : 123CityABC</p>
                            </Grid>
                            <Grid item lg={6}>
                              {" "}
                              <p> Verification Status : verified</p>
                            </Grid>
                            <Grid item lg={6}>
                              <p> police station : Warris khan</p>
                            </Grid>
                            <Grid item lg={6}>
                              <p> Total Rooms : 22</p>
                            </Grid>
                            <Grid item lg={6}>
                              <p> Current Guests : 40</p>
                            </Grid>
                            <Grid item lg={6}>
                              <p> Email : 123@gmail.com</p>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item lg={3}></Grid>

                <Grid item lg={3}></Grid>
                <Grid item lg={6} marginTop={"50px"}>
                  <Paper
                    elevation={10}
                    className="paper"
                    style={{ borderRadius: "10px", paddingTop: "10px" }}
                  >
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
                          <PersonIcon />
                        </div>
                      </div>
                      <div className="tenant-information">
                        <div className="info">
                          <Grid container>
                            <Grid item lg={6}>
                              <p> Name : Taqi ALi</p>
                            </Grid>
                            <Grid item lg={6}>
                              <p>Cnic : 36794-9875380-3</p>
                            </Grid>
                            <Grid item lg={6}>
                              {" "}
                              <p> Father : Mujawar Ali</p>
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
          </Grid>
        </Grid>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="DialogTitle">
          <Typography variant="h5">
            Add Guest
            <PersonIcon sx={{ marginLeft: "10px" }} />
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="DialogContentText">
            <form>
              <Grid container align="center">
                <Grid item lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="standard"
                    required
                  />
                </Grid>
                <br />
                <br />
                <br />
                <Grid item lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Cnic"
                    variant="standard"
                    required
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Room No"
                    variant="standard"
                    required
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Phone"
                    variant="standard"
                    required
                  />
                </Grid>
              </Grid>
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ paddingRight: "30px" }}>
          <Button onClick={handleClose} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      {/* Form Modal End Here */}
    </>
  );
}
