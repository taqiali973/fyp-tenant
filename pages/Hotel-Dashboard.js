import { Grid, Paper, Typography, TextField } from "@mui/material";
import React, { useState } from "react";
import LandingPage from "./Landing-Page";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import GuestList from "./Guest-List";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { useRouter } from "next/router";
import HotelIcon from "@mui/icons-material/Hotel";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

export default function HotelDashboard() {
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
      <LandingPage />
      <div
        style={{
          marginTop: "-30%",
          height: "100vh",
          background: "#d7d7d7",
          height: "100vh",
          marginTop: "3%",
        }}
      >
        <div style={{ marginTop: "50px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginBottom: "20px",
              width: "80%",
              margin: "0 auto",
            }}
          >
            <Button
              style={{
                background: "rgb(79 79 79)",
                color: "#fff",
                marginTop: "20px",
                borderRadius: "17px",
                padding: "15px",
                fontFamily: "cursive",
              }}
              type="submit"
              variant="contained"
              onClick={() => router.push("/Login-Tabs")}
            >
              LogOut
              <LogoutIcon />
            </Button>
          </div>
          <Grid
            container
            style={{
              width: "70%",
              marginLeft: "auto",
              marginRight: "auto",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item lg={10} sx={{ marginTop: "40px" }}>
              <Paper
                elevation={10}
                style={{
                  padding: "40px",
                  background: "rgb(241 241 241)",
                  borderRadius: "30px",
                }}
              >
                <div style={{ display: "flex", marginTop: "20px" }}>
                  <div
                    style={{
                      width: "30%",
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        marginLeft: "10px",
                        background: "rgb(79 79 79)",
                        color: "#fff",
                        padding: "20px",
                        fontFamily: "cursive",
                        borderRadius: "20px",
                      }}
                    >
                      Hotel Information
                      <HotelIcon sx={{ marginLeft: "20px" }} />
                    </Typography>
                  </div>
                  <div
                    style={{
                      width: "50%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      variant="contained"
                      style={{
                        background: "rgb(79 79 79)",
                        fontFamily: "cursive",
                        borderRadius: "20px",
                      }}
                      onClick={handleClickOpen}
                    >
                      <AddIcon style={{ marginRight: "5px" }} />
                      Add Guest
                    </Button>
                  </div>
                </div>
                {/* {openModal && <AddGuest closeModal={setOpenModal} />} */}
                <Grid container style={{ marginTop: "8px" }}>
                  <Grid item lg={12} style={{ display: "flex" }}>
                    <div
                      style={{
                        width: "50%",
                        padding: "30px",
                        fontFamily: "cursive",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <h3>Hotel Name : </h3>
                        <p style={{ marginTop: "22px", marginLeft: "10px" }}>
                          Pearl Continental
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <h3>Phone : </h3>
                        <p style={{ marginTop: "22px", marginLeft: "10px" }}>
                          051-0988765
                        </p>
                      </div>

                      <div style={{ display: "flex", fontFamily: "cursive" }}>
                        <h3>Verification Status : </h3>
                        <p style={{ marginTop: "22px", marginLeft: "10px" }}>
                          verified
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <h3>Total Rooms :</h3>
                        <p style={{ marginTop: "22px", marginLeft: "10px" }}>
                          100
                        </p>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "50%",
                        padding: "20px",
                        fontFamily: "cursive",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <h3>Address :</h3>
                        <p style={{ marginTop: "22px", marginLeft: "10px" }}>
                          Saddar Rawalpindi Cantt
                        </p>
                      </div>
                      <div style={{ display: "flex" }}>
                        <h3>Police Station : </h3>
                        <p style={{ marginTop: "22px", marginLeft: "10px" }}>
                          Saddar Cantt Police Station Rawalpindi{" "}
                        </p>
                      </div>

                      <div style={{ display: "flex" }}>
                        <h3>Current Total Guest : </h3>
                        <p style={{ marginTop: "22px", marginLeft: "10px" }}>
                          60
                        </p>
                      </div>

                      <div style={{ display: "flex" }}>
                        <h3>Email : </h3>
                        <p style={{ marginTop: "22px", marginLeft: "10px" }}>
                          pearlcontinental@gmail.com
                        </p>
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid container>
                  <Grid item lg={12} sx={{ padding: "20px" }}>
                    <div style={{ width: "35%" }}>
                      <Typography
                        variant="h5"
                        sx={{
                          background: "rgb(79 79 79)",
                          color: "#fff",
                          padding: "20px",
                          fontFamily: "cursive",
                          borderRadius: "20px",
                          marginLeft: "30px",
                        }}
                      >
                        Owner Information
                        <PersonIcon
                          sx={{
                            fontSize: "30px",
                            marginLeft: "10px",
                          }}
                        />
                      </Typography>
                    </div>
                    <div
                      style={{
                        marginTop: "30px",
                        paddingLeft: "65px",
                        fontFamily: "cursive",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <h3>Onwer Name: </h3>
                        <p style={{ marginTop: "22px", marginLeft: "10px" }}>
                          Malik Jehangir Khan
                        </p>
                      </div>

                      <div style={{ display: "flex" }}>
                        <h3>Onwer Cnic : </h3>
                        <p style={{ marginTop: "22px", marginLeft: "10px" }}>
                          98765-9854315-9
                        </p>
                      </div>

                      <div style={{ display: "flex" }}>
                        <h3>Onwer Father: : </h3>
                        <p style={{ marginTop: "22px", marginLeft: "10px" }}>
                          Malik Aftab Khan
                        </p>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <div
            style={{
              marginTop: "100px",
              height: "500px",
            }}
          >
            <Grid
              container
              sx={{
                width: "90%",
                margin: "0 auto",
                height: "900px",
              }}
            >
              <Grid item lg={12} sx={{ marginTop: "30px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "30px",
                  }}
                >
                  <div
                    style={{
                      width: "45%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        background: "rgb(79 79 79)",
                        color: "#fff",
                        padding: "10px",
                        borderRadius: "20px",
                        letterSpacing: "1px",
                        wordSpacing: "2px",
                        fontFamily: "cursive",
                      }}
                    >
                      Guest List
                    </Typography>
                  </div>
                  <div
                    style={{
                      width: "40%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      onClick={() => router.push("/View-Guest-History")}
                      sx={{
                        background: "rgb(79 79 79)",
                        color: "#fff",
                        borderRadius: "20px",
                        padding: "20px",
                        fontFamily: "cursive",
                      }}
                    >
                      View Guest History
                      <KeyboardDoubleArrowRightIcon />
                    </Button>
                  </div>
                </div>
                <GuestList />
              </Grid>
            </Grid>
          </div>
        </div>
      </div>

      {/* Form Modal Start Here */}
      <Dialog open={open} onClose={handleClose} maxWidth={"lg"}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "#fff",
            background: "rgb(79 79 79)",
          }}
        >
          <Typography variant="h5" sx={{ fontFamily: "cursive" }}>
            Add Guest
            <PersonIcon sx={{ marginLeft: "10px" }} />
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginTop: "20px" }}>
            <form style={{ padding: "2%" }}>
              <div>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  sx={{ marginBottom: "14px" }}
                />
              </div>
              <TextField
                id="outlined-basic"
                label="Cnic"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "14px" }}
              />

              <TextField
                id="outlined-basic"
                label="Room No"
                variant="outlined"
                fullWidth
                sx={{ marginBottom: "14px" }}
              />

              <TextField
                id="outlined-basic"
                label="Phone"
                variant="outlined"
                fullWidth
              />
            </form>
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ paddingRight: "30px" }}>
          <Button
            onClick={handleClose}
            sx={{ background: "rgb(79 79 79)", fontFamily: "cursive" }}
            variant="contained"
          >
            Cancel
          </Button>
          <Button
            onClick={handleClose}
            sx={{ background: "rgb(79 79 79)", fontFamily: "cursive" }}
            variant="contained"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
      {/* Form Modal End Here */}
    </>
  );
}
