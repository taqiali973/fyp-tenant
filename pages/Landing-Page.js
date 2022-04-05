import React from "react";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";

export default function LandingPage() {
  const router = useRouter();
  return (
    <div>
      <AppBar style={{ background: "#343434" }}>
        <Toolbar>
          <Grid container>
            <Grid
              item
              lg={6}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  letterSpacing: "6px",
                  marginLeft: "50px",
                  cursor: "pointer",
                }}
                onClick={() => router.push("/Main-Landing-Page")}
              >
                TRVS
              </Typography>
            </Grid>

            <Grid
              item
              lg={6}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography style={{ marginLeft: "85%" }}>
                <AccountCircleIcon
                  style={{
                    fontSize: "40px",
                    cursor: "pointer",
                  }}
                  onClick={() => router.push("/Login-Tabs")}
                />
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
