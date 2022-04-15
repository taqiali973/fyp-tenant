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
import LogoutIcon from "@mui/icons-material/Logout";
import LockResetIcon from "@mui/icons-material/LockReset";
import PersonIcon from "@mui/icons-material/Person";

export default function TenantDashboard() {
  const router = useRouter();

  const paperStyle = {
    padding: 30,
    borderRadius: "20px",
    background: "#d7d7d7",
  };
  const avatarStyle = {
    backgroundColor: "rgb(79 79 79)",
    cursor: "pointer",
  };
  return (
    <div>
      <LandingPage />
      <div
        style={{
          marginTop: "-36px",
          height: "90vh",
          background: "rgb(141 136 136)",
          height: "94vh",
        }}
      >
        <div
          style={{
            width: "90%",
            margin: "100px auto 0 auto",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "50%",
              // border: "2px solid green",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                background: "rgb(79 79 79)",
                color: "#fff",
                padding: "20px",
                borderRadius: "20px",
                marginTop: "20px",
              }}
            >
              Dashboard
            </Typography>
          </div>
          <div
            style={{
              width: "50%",

              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                background: "rgb(79 79 79)",
                color: "#fff",
                marginTop: "20px",
                borderRadius: "17px",
                padding: "15px",
              }}
              type="submit"
              variant="contained"
              onClick={() => router.push("/Login-Tabs")}
            >
              LogOut
              <LogoutIcon />
            </Button>
          </div>
        </div>
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
                  <div
                    style={{
                      marginBottom: "10px",

                      background: "rgb(79 79 79)",
                      padding: "8px 0px",
                      borderRadius: "17px",
                      display: "flex",
                    }}
                  >
                    <Typography
                      variant="h4"
                      style={{
                        marginLeft: "3%",
                        color: "#fff",
                      }}
                    >
                      Your Information
                    </Typography>
                    <PersonIcon
                      sx={{
                        marginLeft: "30px",
                        marginTop: "7px",
                        color: "#fff",
                        fontSize: "30px",
                      }}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      marginLeft: "20%",
                    }}
                  >
                    <div>
                      <h3>Name :</h3>
                      <h3>Father_Name :</h3>
                      <h3>Email :</h3>
                    </div>
                    <div style={{ marginLeft: "30%" }}>
                      <h3>CNIC :</h3>
                      <h3>Phone :</h3>
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
                      <Typography variant="h4" sx={{ color: "#5f4f4f" }}>
                        Residency
                      </Typography>
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
                      padding: "20px 70px",
                      display: "flex",
                      marginLeft: "125px",
                    }}
                  >
                    <div style={{ width: "50%" }}>
                      <h3>Type :</h3>
                      <h3>Owner :</h3>
                      <h3>Owner_Cnic :</h3>
                    </div>
                    <div style={{ width: "50%" }}>
                      <h3>Phone :</h3>
                      <h3>Contract :</h3>
                      <h3>Address :</h3>
                    </div>
                  </div>
                </Paper>
              </div>
            </div>
          </Grid>

          <Grid item lg={4}>
            <div style={{ marginTop: "30%" }}>
              <Paper elevation={6} style={paperStyle}>
                <div
                  style={{
                    marginBottom: "20px",
                    background: "rgb(79, 79, 79)",
                    borderRadius: "17px",
                    display: "flex",
                  }}
                >
                  <Typography
                    variant="h5"
                    style={{
                      marginLeft: "29%",
                      color: "#fff",
                      padding: "7px 0",
                    }}
                  >
                    Change Password
                  </Typography>
                  <LockResetIcon
                    sx={{
                      color: "#fff",
                      marginLeft: "20px",
                      marginTop: "5px",
                      fontSize: "35px",
                    }}
                  />
                </div>

                <div>
                  <form>
                    <div style={{ marginLeft: "40px" }}>
                      <TextField
                        label=" Old_Password"
                        placeholder="Enter Old_Password"
                        variant="outlined"
                        type="password"
                        required
                        sx={{ width: 400, margin: "10px 20px" }}
                      />
                    </div>

                    <div style={{ marginLeft: "40px" }}>
                      <TextField
                        label=" New_Password"
                        placeholder="Enter New_Password"
                        variant="outlined"
                        type="password"
                        required
                        sx={{ width: 400, margin: "10px 20px" }}
                      />
                    </div>

                    <div style={{ marginLeft: "40px" }}>
                      <TextField
                        label=" Repeat_Password"
                        placeholder="Repeat_Password"
                        variant="outlined"
                        type="password"
                        required
                        sx={{ width: 400, margin: "10px 20px" }}
                      />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <Button
                        style={{
                          background: "#635d5d",
                          color: "#fff",
                          marginTop: "20px",
                          borderRadius: "13px",
                        }}
                        type="submit"
                        variant="contained"
                      >
                        Sign In
                      </Button>
                    </div>
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
