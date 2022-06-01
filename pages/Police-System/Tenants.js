import React, { useState } from "react";
import { Button, Link, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import CurrentTenants from "../Police-System/CurrentTenants";
import NewTenants from "../Police-System/NewTenants";
import TenantHistory from "../Police-System/TenantHistory";
import { useRouter } from "next/router";

export default function Tenants() {
  const router = useRouter();

  const [value, setValue] = useState(0);

  return (
    <div style={{ background: "whitesmoke" }}>
      <Grid container>
        <Grid item xl={2} marginTop={"50px"} textAlign="center">
          <Button
            variant="contained"
            onClick={() => router.push("/Police-System/Police-dashboard")}
          >
            <ArrowBackIcon /> Back
          </Button>
        </Grid>
        <Grid item xl={4}></Grid>

        <Grid item xl={6}></Grid>
      </Grid>

      <Grid container marginTop={"30px"}>
        <Grid item xl={4} textAlign="right">
          <Typography
            variant="p"
            onClick={() => setValue(0)}
            className={value === 0 ? "borderBottom" : ""}
            style={{
              cursor: " pointer",
              fontSize: "20px",
              letterSpacing: "1px",
              wordSpacing: "2px",
            }}
          >
            New Tenants
          </Typography>
        </Grid>
        <Grid item xl={4} textAlign="center">
          <Typography
            variant="p"
            onClick={() => setValue(1)}
            className={value === 1 ? "borderBottom" : ""}
            style={{
              cursor: " pointer",
              fontSize: "20px",
              letterSpacing: "1px",
              wordSpacing: "2px",
            }}
          >
            Current Tenants
          </Typography>
        </Grid>

        <Grid item xl={4} textAlign="left">
          <Typography
            variant="p"
            onClick={() => setValue(2)}
            className={value === 2 ? "borderBottom" : ""}
            style={{
              cursor: " pointer",
              fontSize: "20px",
              letterSpacing: "1px",
              wordSpacing: "2px",
            }}
          >
            Tenants History
          </Typography>
        </Grid>
      </Grid>
      <div>
        {value === 0 && <NewTenants />}
        {value === 1 && <CurrentTenants />}
        {value === 2 && <TenantHistory />}
      </div>
    </div>
  );
}
{
  /* <Link
            component="button"
            variant="body2"
            underline="none"
            onClick={() => setValue(0)}
            style={{ color: "black", fontSize: "16px" }}
            className={value === 0 ? "borderBottom" : ""}
          >
            New Tenants
          </Link> */
}
{
  /* <Link
            component="button"
            variant="body2"
            underline="none"
            onClick={() => setValue(1)}
            style={{ color: "black", fontSize: "16px" }}
            className={value === 1 ? "borderBottom" : ""}
          >
            CurrentTenants
          </Link> */
}
{
  /* <Link
            component="button"
            variant="body2"
            underline="none"
            onClick={() => setValue(2)}
            className={value === 2 ? "borderBottom" : ""}
            style={{ color: "black", fontSize: "16px" }}
          >
            Tenants History
          </Link> */
}
