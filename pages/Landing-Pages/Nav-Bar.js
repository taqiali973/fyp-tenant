import React from "react";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import { Toolbar } from "@mui/material";
import Link from "@mui/material/Link";

export default function NavBar() {
  const router = useRouter();
  return (
    <div>
      <AppBar className="app-bar">
        <Toolbar>
          <Grid container>
            <Grid item lg={2} className="logo-container">
              <Link
                underline="none"
                className="logo"
                // onClick={() => router.push("/Main-Landing-Page")}
              >
                TRVS
              </Link>
            </Grid>
            <Grid item lg={5}></Grid>

            <Grid item lg={5} className="grid-column">
              <Avatar
                sx={{
                  backgroundColor: "#343434",
                }}
              >
                <AccountCircleIcon
                  style={{
                    fontSize: "40px",
                    cursor: "pointer",
                  }}
                  onClick={() => router.push("/Tabs/Login-Tabs")}
                />
              </Avatar>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
