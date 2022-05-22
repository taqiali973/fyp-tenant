import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import React from "react";
import NavBar from "./Nav-Bar";
import Button from "@mui/material/Button";

export default function MainLandingPage() {
  return (
    <>
      <div className="header">
        <NavBar />
        <div className="header-bg">
          <div className="header-text">
            <div className="header-content">
              <div className="app-heading">
                <h1>
                  Tenant Registration & Verification System
                  <VerifiedUserIcon className="verify-icon" />
                </h1>
              </div>
              <div className="app-para">
                <h3>
                  This project will help the Punjab police and government of
                  Punjab in maintaining the tenants of Punjab province. The
                  local tenants will also be facilitated with this system with
                  verification of their request without forcible locomotion to
                  the police station.
                </h3>
              </div>
            </div>

            <div className="header-button">
              <div className="header-button-content">
                <Button variant="contained">About Us</Button>
                <Button variant="contained">Contact</Button>
              </div>
            </div>
            <div className="copy-right">
              <div className="copy-right-text">
                <p className="copy-right-para">
                  {" "}
                  CopyRights &copy; All Rights Reserved{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
