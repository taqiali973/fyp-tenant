import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppBar from "@mui/material/AppBar";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import HotelIcon from "@mui/icons-material/Hotel";
import TenantLogin from "./Tenant-Login";
import PoliceLogin from "./Police-Login";
import HotelLogin from "./Hotel-Login";
import LandingPage from "./Landing-Page";

function loginTabs() {
  const [value, setValue] = useState(0);
  const handleTabs = (e, value) => {
    setValue(value);
  };
  return (
    <div>
      <LandingPage />
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Grid item xs={3}>
          <AppBar
            position="static"
            style={{
              background: "lightgrey",
            }}
          >
            <Tabs
              value={value}
              onChange={handleTabs}
              style={{
                width: "60%",
                margin: "0 auto",
              }}
            >
              <Tab
                icon={<AccountCircleIcon style={{ fontSize: "40px" }} />}
                aria-label="tenant"
              />
              <Tab
                icon={<LocalPoliceIcon style={{ fontSize: "40px" }} />}
                aria-label="police"
              />
              <Tab
                icon={<HotelIcon style={{ fontSize: "40px" }} />}
                aria-label="hotel"
              />
            </Tabs>
          </AppBar>
          <TabPanel value={value} index={0}>
            <TenantLogin />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <PoliceLogin />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <HotelLogin />
          </TabPanel>
        </Grid>
      </Grid>
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

export default loginTabs;
