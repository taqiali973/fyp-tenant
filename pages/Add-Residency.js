import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import LandingPage from "./Landing-Page";

export default function AddResidency() {
  const router = useRouter();

  const paperStyle = {
    padding: 30,
    width: 700,
    height: "70%",
    borderRadius: "30px",
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <LandingPage />
      <div>
        <Paper elevation={10}>
          <Grid container>
            <Grid item lg={12}>
              <Typography
                align="center"
                variant="h5"
                style={{ marginTop: "20px" }}
              >
                Add Residency
              </Typography>
            </Grid>
          </Grid>
          <Grid container style={paperStyle}>
            <Grid item lg={12} style={{ display: "flex" }}>
              <form autoComplete="off" noValidate>
                <Grid
                  container
                  style={{
                    width: "80%",
                    margin: "0 auto",
                  }}
                >
                  <Grid item lg={6} style={{ marginTop: "30px" }}>
                    <TextField
                      label="Qwner"
                      placeholder="Owner"
                      variant="outlined"
                      required
                      type="text"
                    />
                  </Grid>

                  <Grid item lg={6} style={{ marginTop: "30px" }}>
                    <TextField
                      label="Owner_cnic"
                      placeholder="Enter Owner_cnic"
                      variant="outlined"
                      required
                      type="number"
                    />
                  </Grid>

                  <Grid item lg={6} style={{ marginTop: "30px" }}>
                    <TextField
                      label="Contract_Duration"
                      placeholder="Contract_Duration"
                      variant="outlined"
                      required
                      type="text"
                    />
                  </Grid>

                  <Grid item lg={6} style={{ marginTop: "30px" }}>
                    <TextField
                      label="Phone"
                      placeholder="Enter Phone"
                      variant="outlined"
                      required
                      type="number"
                    />
                  </Grid>

                  <Grid item lg={6} style={{ marginTop: "30px" }}>
                    <TextField
                      label="Building_Type"
                      placeholder="Building_Type"
                      variant="outlined"
                      required
                      type="text"
                    />
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    style={{
                      marginTop: "30px",
                    }}
                  >
                    <TextField
                      id="outlined-multiline-static"
                      label="Address"
                      multiline
                      rows={3}
                      sx={{ width: 220 }}
                      required
                    />
                  </Grid>
                  <Grid item lg={12} style={{ marginTop: "60px" }}>
                    <Typography align="center">
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        onClick={() => router.push("/Tenant-Dashboard")}
                      >
                        Submit
                      </Button>
                    </Typography>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
