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
import Link from "@mui/material/Link";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
export default function HotelDashboard() {
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
          marginTop: "10%",
          height: "90vh",
        }}
      >
        <Grid
          container
          style={{
            width: "70%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid item lg={10}>
            <Paper elevation={10} style={{ padding: "40px" }}>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <div
                  style={{
                    width: "50%",
                  }}
                >
                  <Typography variant="h5" sx={{ marginLeft: "10px" }}>
                    Hotel Information
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
                    style={{ background: "grey" }}
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
                      padding: "10px",
                    }}
                  >
                    <h3>Hotel Name : Pearl Continental</h3>
                    <h3>Phone : 051-0988765</h3>
                    <h3>Verification Status : verified</h3>
                    <h3>Total Rooms : 100</h3>
                  </div>
                  <div
                    style={{
                      width: "50%",
                      padding: "20px",
                    }}
                  >
                    <h3>Address : Saddar Rawalpindi Cantt</h3>
                    <h3>
                      Police Station : Saddar Cannt Police Station Rawalpindi
                    </h3>
                    <h3>Current Total Guest : 60</h3>
                    <h3>Email : pearlcontinental@gmail.com</h3>
                  </div>
                </Grid>
              </Grid>
              <Grid container>
                <Grid
                  item
                  lg={12}
                  sx={{ borderTop: "2px solid black", padding: "20px" }}
                >
                  <Typography variant="h5">Owner Information</Typography>
                  <div style={{ marginTop: "30px" }}>
                    <h3>Onwer Name: Malik Jehangir Khan</h3>
                    <h3>Onwer Cnic: 98765-9854315-9</h3>
                    <h3>Onwer Father: Malik Aftab Khan </h3>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
        <div style={{ marginTop: "40px", height: "500px" }}>
          <Grid
            container
            sx={{ width: "80%", margin: "0 auto", height: "900px" }}
          >
            <Grid item lg={12}>
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
                    variant="h5"
                    sx={{
                      background: "grey",
                      color: "#fff",
                      padding: "20px",
                      borderRadius: "5px",
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
                  <Link
                    component="button"
                    variant="body2"
                    sx={{ textDecoration: "none" }}
                    onClick={() => {
                      console.info("I'm a button.");
                    }}
                  >
                    View Guest History
                    <KeyboardDoubleArrowRightIcon />
                  </Link>
                </div>
              </div>
              <GuestList />
            </Grid>
          </Grid>
        </div>
      </div>

      {/* Form Modal Start Here */}
      <Dialog open={open} onClose={handleClose} maxWidth={"lg"}>
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">Add Guest</Typography>
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
          <Button onClick={handleClose} variant="contained">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      {/* Form Modal End Here */}
    </>
  );
}
