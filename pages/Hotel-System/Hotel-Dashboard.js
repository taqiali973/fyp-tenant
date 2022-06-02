import React, { useEffect, useState } from "react";
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
import axios from "axios";

export default function HotelDashboard() {
  const [hotelData, setHotelData] = useState(null);
  const [ownerData, setOwnerData] = useState(null);

  const router = useRouter();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const api = "https://fyp-tenant.herokuapp.com/api/hotel/dashboard";

  let token = "";
  if (typeof window !== "undefined") {
    token = JSON.parse(localStorage.getItem("hotel")).token;
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(api, {
        headers: { Authorization: "Bearer " + token },
      });
      setHotelData(response.data.hotel);
      setOwnerData(response.data.owner);
    } catch (error) {
      console.log(error);
    }
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
                      <div
                        className="information-heading"
                        style={{ background: "gainsboro", marginTop: "-10px" }}
                      >
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
                      {hotelData ? (
                        <div className="tenant-information">
                          <div className="info">
                            <Grid container>
                              <Grid item lg={6}>
                                <p> Hotel Name : {hotelData.hotel_name}</p>
                              </Grid>
                              <Grid item lg={6} textAlign="center">
                                <p>Phone : {hotelData.phone}</p>
                              </Grid>
                              <Grid item lg={6}>
                                {" "}
                                <p> Address : {hotelData.address}</p>
                              </Grid>
                              <Grid item lg={6} textAlign="center">
                                {" "}
                                <p>
                                  {" "}
                                  Verification Status : {hotelData.isVerified}
                                </p>
                              </Grid>
                              {/* <Grid item lg={6}>
                                <p> police station : Warris khan</p>
                              </Grid> */}
                              <Grid item lg={6}>
                                <p> Total Rooms : {hotelData.totalRooms}</p>
                              </Grid>
                              <Grid item lg={6} textAlign="center">
                                <p> Current Guests : {hotelData.guest_count}</p>
                              </Grid>
                              <Grid item lg={6}>
                                <p> Email : {hotelData.email}</p>
                              </Grid>
                            </Grid>
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <p>No information</p>
                        </div>
                      )}
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
                      <div
                        className="information-heading"
                        style={{ background: "gainsboro", marginTop: "-10px" }}
                      >
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
                      {ownerData ? (
                        <div className="tenant-information">
                          <div className="info">
                            <Grid container>
                              <Grid item lg={6}>
                                <p> Name : {ownerData.own_name}</p>
                              </Grid>
                              <Grid item lg={6}>
                                <p>Cnic : {ownerData.own_cnic}</p>
                              </Grid>
                              <Grid item lg={6}>
                                {" "}
                                <p> Father :{ownerData.own_father}</p>
                              </Grid>
                            </Grid>
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <p>No information</p>
                        </div>
                      )}
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
              <Grid container align="center" padding={"10px"}>
                <Grid item lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
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
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Room No"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    id="outlined-basic"
                    label="Phone"
                    variant="outlined"
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
