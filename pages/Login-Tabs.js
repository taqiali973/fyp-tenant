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
import { useRouter } from "next/router";

const getActiveTab = (tab) => {
  if (tab === "hotel") {
    return 2;
  } else if (tab === "police") {
    return 1;
  } else {
    return 0;
  }
};

function loginTabs() {
  const router = useRouter();
  const [value, setValue] = useState(getActiveTab(router.query.activeTab));
  const handleTabs = (e, value) => {
    setValue(value);
  };
  return (
    <div style={{ background: "rgb(105 98 98)" }}>
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
              background: "rgb(79 79 79)",
            }}
          >
            <Tabs
              value={value}
              onChange={handleTabs}
              style={{
                width: "60%",
                margin: "0 auto",
              }}
              TabIndicatorProps={{
                sx: {
                  backgroundColor: "#dbdbdb",
                },
              }}
            >
              <Tab
                icon={
                  <AccountCircleIcon
                    style={{ fontSize: "40px", color: "#dbdbdb" }}
                  />
                }
                aria-label="tenant"
              />
              <Tab
                icon={
                  <LocalPoliceIcon
                    style={{ fontSize: "40px", color: "#dbdbdb" }}
                  />
                }
                aria-label="police"
              />
              <Tab
                icon={
                  <HotelIcon style={{ fontSize: "40px", color: "#dbdbdb" }} />
                }
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
