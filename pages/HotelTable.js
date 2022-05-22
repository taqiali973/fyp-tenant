import * as React from "react";

// import Box from "@mui/material/Box";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function createData(hotelName, totalGuest) {
  return {
    hotelName,
    totalGuest,
  };
}

function Row(props) {
  const { row } = props;
  // const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell component="th" align="center" scope="row">
          <Link component="button" underline="none">
            {row.hotelName}
          </Link>
        </TableCell>
        <TableCell align="center">{row.totalGuest}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData("Hotel One", 159),
  createData("Hotel Two", 237),
  createData("Hotel Three", 262),
  createData("Hotel Four", 305),
  createData("Hotel Five", 356),
];

export default function HotelTable() {
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
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
