// import React from "react";
// // import LandingPage from "./Landing-Page";
// import NavBar from "../Landing-Pages/Nav-Bar";

// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";
// import Avatar from "@mui/material/Avatar";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import Button from "@mui/material/Button";
// import { useRouter } from "next/router";
// import HotelIcon from "@mui/icons-material/Hotel";

// export default function HotelSignUp() {
//   const router = useRouter();

//   const paperStyle = {
//     padding: 30,
//     width: 700,
//     height: "70%",
//     borderRadius: "30px",
//   };

//   const avatarStyle = {
//     backgroundColor: "#1a1515",
//     margin: "10px 0",
//   };

//   return (
//     <div>
//       {/* <LandingPage /> */}
//       <NavBar />

//       <div
//         style={{
//           marginTop: "64px",
//           width: "100vw",
//           height: "93vh",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Paper elevation={10} style={paperStyle}>
//           <Grid align="center">
//             <Avatar style={avatarStyle}>
//               <HotelIcon />
//             </Avatar>
//             <Typography variant="h5"> Sign Up</Typography>
//             <form autoComplete="off" noValidate>
//               <Grid container>
//                 <Grid item lg={6} style={{ marginTop: "30px" }}>
//                   <TextField
//                     label="UserName"
//                     placeholder="Enter UserName"
//                     variant="outlined"
//                     required
//                     type="text"
//                   />
//                 </Grid>

//                 <Grid item lg={6} style={{ marginTop: "30px" }}>
//                   <TextField
//                     label="Total Rooms"
//                     placeholder="Enter Total Rooms"
//                     variant="outlined"
//                     required
//                     type="text"
//                   />
//                 </Grid>

//                 <Grid item lg={6} style={{ marginTop: "30px" }}>
//                   <TextField
//                     label="Cnic"
//                     placeholder="Enter Cnic"
//                     variant="outlined"
//                     required
//                     type="number"
//                   />
//                 </Grid>

//                 <Grid item lg={6} style={{ marginTop: "30px" }}>
//                   <TextField
//                     label="Phone"
//                     placeholder="Enter Phone"
//                     variant="outlined"
//                     required
//                     type="number"
//                   />
//                 </Grid>

//                 <Grid item lg={6} style={{ marginTop: "30px" }}>
//                   <TextField
//                     label="Email"
//                     placeholder="Enter Email"
//                     variant="outlined"
//                     required
//                     type="email"
//                   />
//                 </Grid>

//                 <Grid item lg={6} style={{ marginTop: "30px" }}>
//                   <TextField
//                     label="Password"
//                     placeholder="Enter Password"
//                     variant="outlined"
//                     required
//                     type="password"
//                   />
//                 </Grid>
//                 <Grid
//                   item
//                   lg={6}
//                   style={{
//                     marginTop: "30px",
//                   }}
//                 >
//                   <TextField
//                     id="outlined-multiline-static"
//                     label="Address"
//                     multiline
//                     rows={3}
//                     sx={{ width: 220 }}
//                     required
//                   />
//                 </Grid>

//                 <Grid item lg={12} style={{ marginTop: "60px" }}>
//                   <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                     onClick={() =>
//                       router.push({
//                         pathname: "/Login-Tabs",
//                         query: { activeTab: "hotel" },
//                       })
//                     }
//                   >
//                     Submit
//                   </Button>
//                 </Grid>
//               </Grid>
//             </form>
//           </Grid>
//         </Paper>
//       </div>
//     </div>
//   );
// }

import React from "react";
import NavBar from "../Landing-Pages/Nav-Bar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

export default function TenantSignUp() {
  const router = useRouter();

  return (
    <div>
      <NavBar />

      <div className="tenant-signUp-div">
        <Paper elevation={10} className="paperStyle">
          <Grid container>
            <Grid item lg={12} textAlign={"center"}>
              <AccountCircleIcon sx={{ fontSize: "40px" }} />
            </Grid>
            <Grid item lg={12} textAlign={"center"}>
              signUp
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={12} paddingTop={"20px"}>
              <form autoComplete="off" noValidate>
                <div className="residency-form">
                  <TextField
                    label="Name"
                    placeholder="Name"
                    required
                    type="text"
                    variant="standard"
                  />

                  <TextField
                    label="Cnic"
                    placeholder=" Cnic"
                    variant="standard"
                    required
                    type="number"
                  />
                </div>
                <br />
                <br />

                <div className="residency-form">
                  <TextField
                    label="phone"
                    placeholder="phone"
                    variant="standard"
                    required
                    type="number"
                  />
                  <TextField
                    label="Email"
                    placeholder="Email"
                    variant="standard"
                    required
                    type="number"
                  />
                </div>
                <br />
                <br />

                <div className="residency-form">
                  <TextField
                    label="password"
                    placeholder="password"
                    variant="standard"
                    required
                    type="password"
                  />
                  <TextField
                    variant="standard"
                    label="Total Rooms"
                    placeholder="Total Rooms"
                    required
                    type="number"
                  />
                </div>
                <br />
                <br />

                <TextField
                  variant="standard"
                  label="Address"
                  placeholder="Address"
                  required
                  type="text"
                  rows={3}
                  sx={{ width: 200 }}
                  multiline
                  style={{ marginLeft: "78px" }}
                />
              </form>
            </Grid>

            <Grid
              item
              lg={12}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              marginTop={"40px"}
            >
              <Button
                variant="contained"
                onClick={() =>
                  router.push({
                    pathname: "Tabs/Login-Tabs",
                    query: { activeTab: "tenant" },
                  })
                }
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          <br />
          <br />
        </Paper>
      </div>
    </div>
  );
}
