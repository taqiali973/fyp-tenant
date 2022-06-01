import React, { useState } from "react";
import Tab from "@mui/material/Tab";
import { TabList, TabContext, TabPanel } from "@mui/lab";
import Grid from "@mui/material/Grid";
import TenantLogin from "../Tenant-System/Tenant-Login";
import HotelLogin from "../Hotel-System/Hotel-Login";
import PoliceLogin from "../Police-System/Police-Login";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import HotelIcon from "@mui/icons-material/Hotel";
import NavBar from "../Landing-Pages/Nav-Bar";

import { useRouter } from "next/router";

const getActiveTab = (tab) => {
  if (tab === "tenant") {
    return "1";
  } else if (tab === "hotel") {
    return "2";
  } else {
    return "3";
  }
};

export default function LoginTabs() {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(
    getActiveTab(router.query.activeTab)
  );
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div>
      <NavBar />

      <div className="Tab-div">
        <Grid container></Grid>
      </div>
      <Grid container className="tab-container">
        <Grid item lg={3}></Grid>
        <Grid item lg={6} className="tab-column">
          <TabContext value={selectedTab}>
            <TabList
              onChange={handleChange}
              variant="fullWidth"
              style={{ backgroundColor: "#626161" }}
            >
              <Tab
                label="Tenant"
                className="tab"
                icon={<AccountCircleIcon className="avatar" />}
                style={{ color: selectedTab == 1 ? "#E2E5DE" : "#B2BEB5" }}
                value="1"
              />
              <Tab
                label="Hotel"
                className="tab"
                icon={<HotelIcon className="avatar" />}
                value="2"
                style={{ color: selectedTab == 2 ? "#E2E5DE" : "#B2BEB5" }}
              />
              <Tab
                label="Police"
                className="tab"
                icon={<LocalPoliceIcon className="avatar" />}
                style={{ color: selectedTab == 3 ? "#E2E5DE" : "#B2BEB5" }}
                value="3"
              />
            </TabList>
            <TabPanel value="1">
              <TenantLogin />
            </TabPanel>
            <TabPanel value="2">
              <HotelLogin />
            </TabPanel>
            <TabPanel value="3">
              <PoliceLogin />
            </TabPanel>
          </TabContext>
        </Grid>
        <Grid item lg={3}></Grid>
      </Grid>
    </div>
    // </div>
  );
}
