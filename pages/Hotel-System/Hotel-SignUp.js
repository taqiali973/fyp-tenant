import React from "react";
import NavBar from "../Landing-Pages/Nav-Bar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Link from "next/link";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function TenantSignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://fyp-tenant.herokuapp.com/api/hotel/register",
        {
          hotel_name: data.name,
          own_name: data,
        }
      );
    } catch (error) {
      console.log(error);
    }

    reset();
  };
  return (
    <div>
      <NavBar />

      <div className="tenant-signUp-div">
        <Paper elevation={10} className="paperStyle">
          <Grid container>
            <Grid item lg={12} textAlign={"center"}>
              <AccountCircleIcon sx={{ fontSize: "40px" }} />
            </Grid>
            <Grid item lg={12} textAlign={"center"}>
              signUp
            </Grid>
          </Grid>
          <Grid container align="center">
            <Grid item lg={12} paddingTop={"20px"}>
              <form
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="residency-form">
                  <TextField
                    label="Hotel Name"
                    placeholder="Hotel Name"
                    required
                    type="text"
                    variant="outlined"
                    {...register("name", {
                      required: "name is required",
                    })}
                    error={!!errors?.name}
                    helperText={errors?.name ? errors.name.message : null}
                  />

                  <TextField
                    label="Cnic"
                    placeholder=" Cnic"
                    variant="outlined"
                    required
                    type="text"
                    {...register("cnic", {
                      required: "cnic is required",
                    })}
                    error={!!errors?.cnic}
                    helperText={errors?.cnic ? errors.cnic.message : null}
                  />
                </div>
                <br />
                <br />

                <div className="residency-form">
                  <TextField
                    label="phone"
                    placeholder="phone"
                    variant="outlined"
                    required
                    type="text"
                    {...register("phone", {
                      required: "phone no is required",
                    })}
                    error={!!errors?.phone}
                    helperText={errors?.phone ? errors.phone.message : null}
                  />
                  <TextField
                    label="Email"
                    placeholder="Email"
                    variant="outlined"
                    required
                    type="text"
                    {...register("email", {
                      required: "email is required",
                      pattern: {
                        value:
                          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      },
                    })}
                    error={!!errors?.email}
                    helperText={errors?.email ? errors.email.message : null}
                  />
                </div>
                <br />
                <br />

                <div className="residency-form">
                  <TextField
                    label="password"
                    placeholder="password"
                    variant="outlined"
                    required
                    type="text"
                    {...register("password", {
                      required: "password is required",
                    })}
                    error={!!errors?.password}
                    helperText={
                      errors?.password ? errors.password.message : null
                    }
                  />
                  <TextField
                    variant="outlined"
                    label="Total Rooms"
                    placeholder="Total Rooms"
                    required
                    type="text"
                    {...register("rooms", {
                      required: "rooms is required",
                    })}
                    error={!!errors?.rooms}
                    helperText={errors?.rooms ? errors.rooms.message : null}
                  />
                </div>
                <br />
                <br />

                <TextField
                  variant="outlined"
                  label="Address"
                  placeholder="Address"
                  required
                  type="text"
                  rows={3}
                  sx={{ width: 200 }}
                  multiline
                  style={{ marginLeft: "78px" }}
                  type="text"
                  {...register("rooms", {
                    required: "rooms is required",
                  })}
                  error={!!errors?.rooms}
                  helperText={errors?.rooms ? errors.rooms.message : null}
                />
                <Grid
                  item
                  lg={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  marginTop={"40px"}
                >
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
          <br />
          <br />
        </Paper>
      </div>
    </div>
  );
}
