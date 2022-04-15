import React from "react";
import Typography from "@mui/material/Typography";
import image from "../public/images/image.jpeg";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import SecurityIcon from "@mui/icons-material/Security";

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
            variant="h4"
            style={{
              marginTop: "10%",
              color: "rgb(255 255 255)",
              fontWeight: "bold",
              letterSpacing: "2px",
              wordSpacing: "3px",
              background: "rgb(79 79 79)",
              padding: "20px",
              borderRadius: "13px",
              fontFamily: "cursive",
            }}
          >
            TENANT REGISTRATION & VERIFICATION SYSTEM
            <SecurityIcon sx={{ fontSize: "50px", marginLeft: "20px" }} />
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
              marginTop: "70px",
              color: "rgb(255 255 255)",
              fontWeight: "bold",
              letterSpacing: "2px",
              wordSpacing: "3px",
              lineHeight: "40px",
              fontFamily: "cursive",
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
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              width: "80%",

              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                marginRight: "20px",
                background: "rgb(79 79 79)",
                fontWeight: "bold",
                fontFamily: "cursive",
              }}
            >
              About
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "rgb(79 79 79)",
                fontWeight: "bold",
                padding: "10px",
              }}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPageTwo;
