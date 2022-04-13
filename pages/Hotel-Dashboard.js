import { Grid, Paper, Typography } from "@mui/material";
import React, { useState } from "react";
import LandingPage from "./Landing-Page";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  height: 700,
  bgColor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function HotelDashboard() {
  // const [openModal, setOpenModal] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
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
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "50%",
                  }}
                >
                  <Typography variant="h5">Hotel Information</Typography>
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
                    onClick={handleOpen}
                  >
                    <AddIcon style={{ marginRight: "5px" }} />
                    Add Guest
                  </Button>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        Text in a modal
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor
                        ligula.
                      </Typography>
                    </Box>
                  </Modal>
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
                    <h3>Hotel Name :</h3>
                    <h3>Phone :</h3>
                    <h3>Verification Status :</h3>
                    <h3>Total Rooms :</h3>
                  </div>
                  <div
                    style={{
                      width: "50%",
                      padding: "20px",
                    }}
                  >
                    <h3>Address:</h3>
                    <h3>Police Station:</h3>
                    <h3>Current Total Guest:</h3>
                    <h3>Email:</h3>
                  </div>
                </Grid>
                <Grid item lg={12}>
                  <Typography variant="h5">Owner Information</Typography>
                  <div style={{ marginTop: "20px" }}>
                    <h3>Onwer Name:</h3>
                    <h3>Onwer Cnic:</h3>
                    <h3>Onwer Father:</h3>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
