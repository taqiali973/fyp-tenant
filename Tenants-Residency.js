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
  address,
  owner_name,
  owner_father,
  owner_cnic,
  owner_phone,
  entry_date,
  exit_date
) {
  return {
    id,
    address,
    owner_name,
    owner_father,
    owner_cnic,
    owner_phone,
    entry_date,
    exit_date,
  };
}
const rows = [
  createData(
    1,
    "Peshawar Road Rawalpindi",
    "Talha khan",
    "Mohammad Taha",
    "37405 - 7512586 - 9",
    "03427654313",

    "12-2-2022",
    "22-4-2022"
  ),
  createData(
    2,
    "Peshawar Road Rawalpindi",
    "Talha khan",
    "Mohammad Taha",
    "37405 - 7512586 - 9",
    "03427654313",

    "12-2-2022",
    "22-4-2022"
  ),
  createData(
    3,
    "Peshawar Road Rawalpindi",
    "Talha khan",
    "Mohammad Taha",
    "37405 - 7512586 - 9",
    "03427654313",

    "12-2-2022",
    "22-4-2022"
  ),
  createData(
    4,
    "Peshawar Road Rawalpindi",
    "Talha khan",
    "Mohammad Taha",
    "37405 - 7512586 - 9",
    "03427654313",

    "12-2-2022",
    "22-4-2022"
  ),
  createData(
    5,
    "Peshawar Road Rawalpindi",
    "Talha khan",
    "Mohammad Taha",
    "37405 - 7512586 - 9",
    "03427654313",

    "12-2-2022",
    "22-4-2022"
  ),
  createData(
    6,
    "Peshawar Road Rawalpindi",
    "Talha khan",
    "Mohammad Taha",
    "37405 - 7512586 - 9",
    "03427654313",

    "12-2-2022",
    "22-4-2022"
  ),
  createData(
    7,
    "Peshawar Road Rawalpindi",
    "Talha khan",
    "Mohammad Taha",
    "37405 - 7512586 - 9",
    "03427654313",

    "12-2-2022",
    "22-4-2022"
  ),
  createData(
    8,
    "Peshawar Road Rawalpindi",
    "Talha khan",
    "Mohammad Taha",
    "37405 - 7512586 - 9",
    "03427654313",

    "12-2-2022",
    "22-4-2022"
  ),
  createData(
    9,
    "Peshawar Road Rawalpindi",
    "Talha khan",
    "Mohammad Taha",
    "37405 - 7512586 - 9",
    "03427654313",

    "12-2-2022",
    "22-4-2022"
  ),
  createData(
    10,
    "Peshawar Road Rawalpindi",
    "Talha khan",
    "Mohammad Taha",
    "37405 - 7512586 - 9",
    "03427654313",

    "12-2-2022",
    "22-4-2022"
  ),
];
export default function TenantsResidency() {
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
                    Address
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
                    Owner name
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
                    Owner Father
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
                    Owner Cnic
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
                    Owner Phone
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
                    EntryDate
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
                    ExitDate
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
                      {row.address}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {row.owner_name}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {row.owner_father}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {row.owner_cnic}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {row.owner_phone}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {row.entry_date}
                    </TableCell>
                    <TableCell
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      {row.exit_date}
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
