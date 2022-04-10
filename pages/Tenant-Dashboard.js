import React from "react";
import LandingPage from "./Landing-Page";
import Grid from "@mui/material/Grid";
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

export default function TenantDashboard() {
  const router = useRouter();

  const paperStyle = {
    padding: 30,
    borderRadius: "20px",
  };
  const avatarStyle = {
    backgroundColor: "#1a1515",
    cursor: "pointer",
  };
  return (
    <div>
      <LandingPage />
      <div
        style={{
          marginTop: "64px",
          height: "90vh",
        }}
      >
        <Grid
          container
          style={{
            width: "80%",
            marginTop: "60px",
            height: "80%",
            margin: "0 auto",
          }}
        >
          <Grid item lg={8} style={{ padding: "40px" }}>
            <div>
              <div style={{ marginTop: "30px" }}>
                <Paper elevation={6} style={paperStyle}>
                  <div style={{ marginBottom: "10px", background: "grey" }}>
                    <Typography
                      variant="h4"
                      style={{ marginLeft: "20%", color: "#fff" }}
                    >
                      Your Info
                    </Typography>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "20%",
                    }}
                  >
                    <div>
                      <h3>Name:</h3>
                      <h3>FatherName:</h3>
                      <h3>Email:</h3>
                    </div>
                    <div style={{ marginLeft: "30%" }}>
                      <h3>CNIC:</h3>
                      <h3>Phone:</h3>
                    </div>
                  </div>
                </Paper>
              </div>

              <div style={{ marginTop: "30px" }}>
                <Paper elevation={6} style={paperStyle}>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                    }}
                  >
                    <div style={{ width: "50%", display: "flex" }}>
                      <Typography variant="h4">Residency</Typography>
                      <div style={{ marginLeft: "10px" }}>
                        <Avatar style={avatarStyle}>
                          <DoneIcon />
                        </Avatar>
                      </div>

                      <div style={{ marginLeft: "5px" }}>
                        <Avatar style={avatarStyle}>
                          <WarningAmberIcon />
                        </Avatar>
                      </div>
                    </div>
                    <div
                      style={{
                        width: "50%",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <div style={{ marginRight: "5px" }}>
                        <Avatar style={avatarStyle}>
                          <AddIcon
                            onClick={() => router.push("/Add-Residency")}
                          />
                        </Avatar>
                      </div>

                      <div>
                        <Avatar style={avatarStyle}>
                          <RemoveIcon />
                        </Avatar>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      marginTop: "20px",
                      paddingLeft: "20px",
                    }}
                  >
                    <Typography variant="h5">No Residency Added</Typography>
                  </div>
                </Paper>
              </div>
            </div>
          </Grid>

          <Grid item lg={4}>
            <div style={{ marginTop: "30%" }}>
              <Paper elevation={6} style={paperStyle}>
                <div style={{ marginBottom: "10px", background: "grey" }}>
                  <Typography
                    variant="h4"
                    style={{ marginLeft: "20%", color: "#fff" }}
                  >
                    Change Password
                  </Typography>
                </div>

                <div>
                  <form>
                    <div>
                      <TextField
                        label=" Old_Password"
                        placeholder="Enter Old_Password"
                        variant="outlined"
                        type="password"
                        required
                        sx={{ width: 400, margin: "10px 20px" }}
                      />
                    </div>

                    <div>
                      <TextField
                        label=" New_Password"
                        placeholder="Enter New_Password"
                        variant="outlined"
                        type="password"
                        required
                        sx={{ width: 400, margin: "10px 20px" }}
                      />
                    </div>

                    <div>
                      <TextField
                        label=" Repeat_Password"
                        placeholder="Repeat_Password"
                        variant="outlined"
                        type="password"
                        required
                        sx={{ width: 400, margin: "10px 20px" }}
                      />
                    </div>
                    <Button
                      style={{ background: "grey", color: "#fff" }}
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Sign In
                    </Button>
                  </form>
                </div>
              </Paper>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
