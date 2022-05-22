import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import HouseIcon from "@mui/icons-material/House";

export default function AddResidency() {
  const router = useRouter();

  return (
    <div className="residency-div">
      <div>
        <Paper elevation={10}>
          <Grid container>
            <Grid item lg={12} className="paper-col-12">
              <div className="add-residency">
                <HouseIcon />
                <h3>Add Residency</h3>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={12}>
              <form autoComplete="off" noValidate>
                <div className="residency-form">
                  <TextField
                    label="Qwner"
                    placeholder="Owner"
                    required
                    type="text"
                    variant="standard"
                  />

                  <TextField
                    label="Owner_cnic"
                    placeholder="Enter Owner_cnic"
                    variant="standard"
                    required
                    type="number"
                  />
                </div>
                <br />
                <br />

                <div className="residency-form">
                  <TextField
                    label="Contract_Duration"
                    placeholder="Contract_Duration"
                    variant="standard"
                    required
                    type="text"
                  />
                  <TextField
                    label="Phone"
                    placeholder="Enter Phone"
                    variant="standard"
                    required
                    type="number"
                  />
                </div>
                <br />
                <br />

                <div className="last-col">
                  <TextField
                    label="Building_Type"
                    placeholder="Building_Type"
                    variant="standard"
                    style={{ marginLeft: "43px" }}
                    required
                    type="text"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    variant="standard"
                    style={{ marginLeft: "160px" }}
                    label="Address"
                    multiline
                    rows={3}
                    sx={{ width: 220 }}
                    marginLeft={"30px"}
                    required
                  />
                </div>
              </form>
            </Grid>
            <Grid item lg={12} textAlign="center">
              <Button
                variant="contained"
                onClick={() => router.push("/Tenant-System/Tenant-Dashboard")}
              >
                Submit
              </Button>
              <br />
              <br />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
