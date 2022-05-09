import * as React from "react";
import { Grid, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LandingPage from "./Landing-Page";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/router";

function createData(id, name, cnic, room_no, phone, entryAt, exitAt) {
  return { id, name, cnic, room_no, phone, entryAt, exitAt };
}
const rows = [
  createData(
    1,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "22",
    "03427654313",

    "9:00pm",
    "3:00pm"
  ),
  createData(
    2,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "22",
    "03427654313",
    "3:00pm",
    "9:00pm"
  ),
  createData(
    3,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "22",
    "03427654313",
    "3:00pm",
    "9:00pm"
  ),
  createData(
    4,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "22",
    "03427654313",
    "3:00pm",
    "9:00pm"
  ),
  createData(
    5,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "22",
    "03427654313",
    "3:00pm",
    "9:00pm"
  ),
  createData(
    6,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "22",
    "03427654313",
    "3:00pm",
    "9:00pm"
  ),
  createData(
    7,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "22",
    "03427654313",
    "3:00pm",
    "9:00pm"
  ),
  createData(
    8,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "22",
    "03427654313",
    "3:00pm",
    "9:00pm"
  ),
  createData(
    9,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "22",
    "03427654313",
    "3:00pm",
    "9:00pm"
  ),
  createData(
    10,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "22",
    "03427654313",
    "3:00pm",
    "9:00pm"
  ),
];

export default function ViewGuestHistory() {
  const router = useRouter();

  return (
    <>
      <LandingPage />
      <div
        style={{
          marginTop: "5%",
          height: "100vh",
          background: "rgb(255 255 255)",
          marginTop: "3%",
          position: "fixed",
          width: "100vw",
        }}
      >
        <div style={{ marginTop: "50px" }}>
          <div
            style={{
              width: "90%",
              margin: "0 auto",
              marginBottom: "20px",
            }}
          >
            <ArrowBackIosIcon
              sx={{ cursor: "pointer" }}
              onClick={() => router.push("/Hotel-Dashboard")}
            />
          </div>
          <div
            style={{
              background: "rgb(79 79 79)",
              width: "30%",
              margin: "0 auto",
              marginBottom: "60px",
              display: "flex",
              justifyContent: "center",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "#fff", fontFamily: "cursive" }}
            >
              View-Guest-History
            </Typography>
            <RemoveRedEyeIcon
              sx={{
                marginLeft: "10px",
                fontSize: "30px",
                color: "#fff",
                background: "rgb(79 79 79)",
              }}
            />
            {/* <div
              style={{
                width: "45%",

                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Typography variant="h6" sx={{ color: "#fff" }}>
                View-Guest-History
              </Typography>
            </div>
            <div style={{ width: "45%" }}>
              <PreviewIcon
                sx={{ marginLeft: "10px", fontSize: "30px", color: "#fff" }}
              />
            </div> */}
          </div>
          <Grid
            container
            sx={{ width: "80%", margin: "0 auto", height: "900px" }}
          >
            <Grid item lg={12}>
              <div>
                <Paper elevation={10}>
                  <div>
                    <TableContainer>
                      <Table>
                        <TableHead sx={{ background: "rgb(79, 79, 79)" }}>
                          <TableRow>
                            <TableCell
                              sx={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                textAlign: "center",
                                color: "#fff",
                                fontFamily: "cursive",
                              }}
                            >
                              Name
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                textAlign: "center",
                                color: "#fff",
                                fontFamily: "cursive",
                              }}
                            >
                              Cnic
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                textAlign: "center",
                                color: "#fff",
                                fontFamily: "cursive",
                              }}
                            >
                              Room No
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                textAlign: "center",
                                color: "#fff",
                                fontFamily: "cursive",
                              }}
                            >
                              Phone
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                textAlign: "center",
                                color: "#fff",
                                fontFamily: "cursive",
                              }}
                            >
                              EntryAt
                            </TableCell>
                            <TableCell
                              sx={{
                                fontWeight: "bold",
                                fontSize: "18px",
                                textAlign: "center",
                                color: "#fff",
                                fontFamily: "cursive",
                              }}
                            >
                              ExitAt
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow key={row.id}>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                }}
                              >
                                {row.name}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                }}
                              >
                                {row.cnic}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                }}
                              >
                                {row.room_no}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                }}
                              >
                                {row.phone}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                }}
                              >
                                {row.entryAt}
                              </TableCell>
                              <TableCell
                                sx={{
                                  textAlign: "center",
                                }}
                              >
                                {row.exitAt}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </Paper>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
