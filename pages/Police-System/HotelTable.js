import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";

function createData(hotelName, totalGuest, address, owner) {
  return {
    hotelName,
    totalGuest,
    address,
    owner,
  };
}

function Row(props) {
  const { row } = props;

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" align="center" scope="row">
          <Link component="button" underline="none">
            {row.hotelName}
          </Link>
        </TableCell>
        <TableCell align="center">{row.totalGuest}</TableCell>
        <TableCell align="center">{row.address}</TableCell>
        <TableCell align="center">{row.owner}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}
// const router = useRouter();

const rows = [
  createData(
    <Link
      underline="none"
      href="/Police-System/Hotel-Custom-Pages/Pearl-Continental/Info"
    >
      PC
    </Link>,
    159,
    "Rawalpindi",
    "Malik MeerDaad"
  ),
  createData(
    <Link underline="none">FlashMan</Link>,
    237,
    "Islamabad",
    "Chauhdry Hakeem"
  ),
  createData(
    <Link underline="none">Islamabad Hotel</Link>,
    262,
    "Lahore",
    "Shahnawaz Khan"
  ),
  createData(
    <Link underline="none">Avatar Hotel</Link>,
    305,
    "Karachi",
    "Ameer Mughal"
  ),
  createData(
    <Link underline="none">Shangrilla Hotel</Link>,
    356,
    "Faisalabad",
    "Raja Qadeer"
  ),
];

export default function HotelTable() {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Grid container margin={"40px 0"}></Grid>
      <Paper elevation={10}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow sx={{ background: "#544f4f", width: "100%" }}>
                {/* <TableCell /> */}
                <TableCell align="center" sx={{ color: "white" }}>
                  Hotel Name
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Guests
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Address
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Owner
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
