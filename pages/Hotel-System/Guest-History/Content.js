import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function Content() {
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
      name: "ExitAt",
      selector: (row) => row.entry,
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
    <Grid container display={"flex"} justifyContent={"center"}>
      <Grid item lg={8}>
        <DataTable
          title="Guest History"
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
  );
}
