import React from "react";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";

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
                  color: "#bfbfb",
                  fontWeight: "bold",
                  fontFamily: "cursive",
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
              <div style={{ marginLeft: "90%" }}>
                <Avatar>
                  <AccountCircleIcon
                    style={{
                      fontSize: "40px",
                      cursor: "pointer",
                    }}
                    onClick={() => router.push("/Login-Tabs")}
                  />
                </Avatar>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
