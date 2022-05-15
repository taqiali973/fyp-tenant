import React from "react";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

function createData(
  id,
  hotel_name,
  hotel_email,
  hotel_phone,
  total_rooms,
  address,
  current_guests
) {
  return {
    id,
    hotel_name,
    hotel_email,
    hotel_phone,
    total_rooms,
    address,
    current_guests,
  };
}
const rows = [
  createData(
    1,
    "Pearl Continental",
    "pc123@gmail.com",
    "03427654313",
    "70",
    "Saddar Rawalpindi",
    "40"
  ),
  createData(
    2,
    "Pearl Continental",
    "pc123@gmail.com",
    "03427654313",
    "70",
    "Saddar Rawalpindi",

    "40"
  ),
  createData(
    3,
    "Pearl Continental",
    "pc123@gmail.com",
    "03427654313",
    "70",
    "Saddar Rawalpindi",
    "40"
  ),
  createData(
    4,
    "Pearl Continental",
    "pc123@gmail.com",
    "03427654313",
    "70",
    "Saddar Rawalpindi",
    "40"
  ),
  createData(
    5,
    "Pearl Continental",
    "pc123@gmail.com",
    "03427654313",
    "70",
    "Saddar Rawalpindi",
    "40"
  ),
  createData(
    6,
    "Pearl Continental",
    "pc123@gmail.com",
    "03427654313",
    "70",
    "Saddar Rawalpindi",

    "40"
  ),
  createData(
    7,
    "Pearl Continental",
    "pc123@gmail.com",
    "03427654313",
    "70",
    "Saddar Rawalpindi",
    "40"
  ),
  createData(
    8,
    "Pearl Continental",
    "pc123@gmail.com",
    "03427654313",
    "70",
    "Saddar Rawalpindi",
    "40"
  ),
  createData(
    9,
    "Pearl Continental",
    "pc123@gmail.com",
    "03427654313",
    "70",
    "Saddar Rawalpindi",
    "40"
  ),
  createData(
    10,
    "Pearl Continental",
    "pc123@gmail.com",
    "03427654313",
    "70",
    "Saddar Rawalpindi",
    "40"
  ),
];
export default function Hotels() {
  return (
    <div
      style={{
        marginTop: "40px",
        width: "90%",
        marginTop: "30px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Paper
        elevation={10}
        sx={{ borderRadius: "20px", bgcolor: "rgb(241,241,241)" }}
      >
        <div>
          <TableContainer>
            <Table>
              <TableHead sx={{ background: "rgb(79 79 79)" }}>
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
                    Name{" "}
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
                    Email
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
                    Phone{" "}
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
                    Total Rooms{" "}
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
                    Address{" "}
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
                    Guests
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
                      {row.hotel_name}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {row.hotel_email}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {row.hotel_phone}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {row.total_rooms}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {row.address}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {row.current_guests}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Paper>
    </div>
  );
}
