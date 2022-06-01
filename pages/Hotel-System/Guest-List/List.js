import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

export default function UserTable() {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const getCountries = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserData(response.data);
      setFilteredData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Cnic",
      selector: (row) => row.username,
    },
    {
      name: "Room No",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.email,
    },
    {
      name: "Entry At",
      selector: (row) => row.email,
    },
    {
      name: "Action",
      cell: (row) => (
        <Button variant="contained" onClick={() => alert(row.id)}>
          Delete
        </Button>
      ),
    },
  ];
  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    const result = userData.filter((user) => {
      return user.name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredData(result);
  }, [search]);
  return (
    <>
      <Grid container style={{ background: "whitesmoke" }}>
        <Grid item lg={2} marginTop={"30px"} textAlign="center">
          <Button
            variant="contained"
            onClick={() => router.push("/Hotel-System/Hotel-Dashboard")}
          >
            <ArrowBackIcon />
            Back
          </Button>
        </Grid>
        <Grid item lg={2}></Grid>
        <Grid item lg={4}></Grid>
        <Grid item lg={4}></Grid>
      </Grid>

      <Grid
        container
        display={"flex"}
        justifyContent={"center"}
        style={{
          backgroundColor: "whitesmoke",
          height: "92vh",
        }}
      >
        <Grid item lg={10} marginTop={"50px"}>
          <DataTable
            title="Guest List"
            columns={columns}
            data={filteredData}
            pagination
            fixedHeader
            fixedHeaderScrollHeight="400px"
            selectableRows
            selectableRowsHighlight
            highlightOnHover
            subHeader
            subHeaderComponent={
              <TextField
                id="outlined-basic"
                label="Search Here"
                variant="outlined"
                value={search}
                sx={{ marginBottom: "50px" }}
                onChange={(e) => setSearch(e.target.value)}
              />
            }
          />
        </Grid>
      </Grid>
    </>
  );
}
