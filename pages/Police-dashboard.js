import * as React from "react";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import LandingPage from "./Landing-Page";

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
export default function PoliceDashboard() {
  return (
    <>
      <LandingPage />
      <Grid sx={{ marginTop: "70px" }}>
        <Grid item lg={12}>
          Police
        </Grid>
      </Grid>
    </>
  );
}
