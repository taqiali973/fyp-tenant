import React from "react";
import Typography from "@mui/material/Typography";
import image from "../public/images/image.jpeg";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

function LandingPageTwo() {
  const styles = {
    GridContainer: {
      backgroundImage: `url(${image.src})`,
      backgroundSize: "cover",
      filter: "brightness(0.8)",
      marginTop: "64px",
      width: "100%",
      height: "905px",
    },
  };

  return (
    <>
      <div style={styles.GridContainer}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            align="center"
            variant="h3"
            style={{
              marginTop: "10%",
              color: "#FFFFFF",
              fontWeight: "bold",
              letterSpacing: "2px",
              wordSpacing: "3px",
            }}
          >
            TENANT REGISTRATION & VERIFICATION SYSTEM
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "90%",
            margin: "0 auto",
          }}
        >
          <Typography
            align="center"
            variant="h5"
            style={{
              marginTop: "20px",
              color: "#FFFFFF",
              fontWeight: "bold",
              letterSpacing: "2px",
              wordSpacing: "3px",
              lineHeight: "40px",
            }}
          >
            A centralized digital system project will help the Punjab police and
            government of Punjab in maintaining the tenants of Punjab province.
            The local tenants will also be facilitated with this system with
            verification of their request without forcible locomotion to the
            police station.which provides tenants registration with different
            types of tenants (on basis of their time period) to be registered
            and a dashboard for local police stations of the area, to view a
            list of tenants in their respective regions who require
            verification, so that they can verify it without hustles of
            travelling to the site
          </Typography>
        </div>
        <div
          style={{
            width: "90%",
            margin: "0 auto",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Button variant="contained">
            View Details
            <KeyboardDoubleArrowRightIcon />
          </Button>
        </div>
      </div>
    </>
  );
}

export default LandingPageTwo;

{
  /* <div style={{ border: "2px solid red" }}>
  <h1>Tenant Registration & Verification System</h1>
</div> */
}
