import React, { useState } from "react";
import LandingPage from "./Landing-Page";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import StationInfo from "./Station-Info";

export default function PoliceDashboard() {
  const [value, setValue] = useState();
  const handleTabs = (e, value) => {
    setValue(value);
  };
  return (
    <div>
      <LandingPage />
      <div
        style={{
          border: "2px solid red",
          width: "100%",
          height: "100vh",
          marginTop: "60px",
        }}
      >
        <Grid
          container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "50px",
          }}
        >
          <Grid item xs={6}>
            <AppBar
              position="static"
              style={{
                background: "rgb(79 79 79)",
              }}
            >
              <Tabs value={value} onChange={handleTabs} variant={"fullWidth"}>
                <Tab label="Station Info" />
                <Tab label="Tenants" />
                <Tab label="Hotels" />
              </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
              <StationInfo />
            </TabPanel>
            <TabPanel value={value} index={1}></TabPanel>
            <TabPanel value={value} index={2}></TabPanel>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
function TabPanel(props) {
  const { children, value, index } = props;
  return (
    <div>
      {value === index && (
        <>
          <h1>{children}</h1>
        </>
      )}
    </div>
  );
}
