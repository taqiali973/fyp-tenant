import React from "react";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Link from "@mui/material/Link";
import PersonIcon from "@mui/icons-material/Person";

export default function NavBar() {
  const router = useRouter();
  return (
    <div>
      <AppBar className="app-bar">
        <Toolbar>
          <Grid
            container
            //  border={"2px solid green"}
            padding={"0px 20px"}
          >
            <Grid
              item
              lg={1}
              // border={"2px solid red"}
              className="logo-container"
              // textAlign={"right"}
            >
              <Link
                underline="none"
                className="logo"
                onClick={() => router.push("/Landing-Pages/Main-Landing-Page")}
                style={{ cursor: "pointer" }}
              >
                TRVS
              </Link>
            </Grid>
            <Grid item lg={5}>
              <p
                style={{
                  fontStyle: "italic",
                  color: "#fff",
                  marginTop: "20px",
                  wordSpacing: "1px",
                  letterSpacing: "1px",
                }}
              >
                Tenant Registration & Verification System
              </p>
            </Grid>

            <Grid
              item
              lg={6}
              // border={"2px solid red"}
              textAlign="right"
              className="grid-column"
            >
              <PersonIcon
                style={{
                  fontSize: "40px",
                  cursor: "pointer",
                }}
                onClick={() => router.push("/Tabs/Login-Tabs")}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
