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

function createData(id, name, cnic, room_no, phone, entryAt) {
  return { id, name, cnic, room_no, phone, entryAt };
}
const rows = [
  createData(
    1,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "Mohammad Taha",
    "03427654313",
    "tenant@gmail.com"
  ),
  createData(
    2,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "Mohammad Taha",
    "03427654313",
    "tenant@gmail.com"
  ),
  createData(
    3,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "Mohammad Taha",
    "03427654313",
    "tenant@gmail.com"
  ),
  createData(
    4,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "Mohammad Taha",
    "03427654313",
    "tenant@gmail.com"
  ),
  createData(
    5,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "Mohammad Taha",
    "03427654313",
    "tenant@gmail.com"
  ),
  createData(
    6,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "Mohammad Taha",
    "03427654313",
    "tenant@gmail.com"
  ),
  createData(
    7,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "Mohammad Taha",
    "03427654313",
    "tenant@gmail.com"
  ),
  createData(
    8,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "Mohammad Taha",
    "03427654313",
    "tenant@gmail.com"
  ),
  createData(
    9,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "Mohammad Taha",
    "03427654313",
    "tenant@gmail.com"
  ),
  createData(
    10,
    "Ali Ahmed",
    "37405 - 7512586 - 9",
    "Mohammad Taha",
    "03427654313",
    "tenant@gmail.com"
  ),
];
export default function StationInfo() {
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
                    Father Name
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
                    Actions
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
                      <IconButton aria-label="accept" component="span">
                        <DeleteIcon sx={{ color: "red" }} />
                      </IconButton>
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
