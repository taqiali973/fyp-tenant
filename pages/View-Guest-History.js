import * as React from "react";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

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
  return (
    <div style={{ marginTop: "40px", height: "500px" }}>
      <Grid container sx={{ width: "80%", margin: "0 auto", height: "900px" }}>
        <Grid item lg={12}>
          <div>
            <Paper elevation={10}>
              <div>
                <TableContainer>
                  <Table>
                    <TableHead sx={{ background: "grey" }}>
                      <TableRow>
                        <TableCell
                          sx={{
                            fontWeight: "bold",
                            fontSize: "18px",
                            textAlign: "center",
                            color: "#fff",
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
  );
}
