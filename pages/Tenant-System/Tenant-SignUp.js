import React from "react";
import NavBar from "../Landing-Pages/Nav-Bar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
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
        "https://fyp-tenant.herokuapp.com/api/tenant/register",
        {
          email: data.email,
          password: data.password,
          name: data.name,
          father: data.father,
          cnic: data.cnic,
          phone: data.phone,
        }
      );
      console.log(response.data);
      alert("Successfully Signup");
    } catch (error) {
      console.log(error);
      alert("User already registered");
    }
    reset();
  };
  return (
    <div>
      <NavBar />

      <div className="tenant-signUp-div">
        <Paper elevation={10} className="paperStyle">
          <Grid container align="center">
            <Grid item lg={12} padding={"10px 0"}>
              <Avatar sx={{ background: "black" }}>
                <AccountCircleIcon sx={{ fontSize: "40px", color: "white" }} />
              </Avatar>
            </Grid>
            <Grid item lg={12} padding={"13px 0"} textAlign={"center"}>
              SignUp
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={12} paddingTop={"20px"}>
              <form
                autoComplete="off"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="residency-form">
                  <TextField
                    label="Name"
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
                    label="Father"
                    variant="outlined"
                    required
                    type="text"
                    {...register("father", {
                      required: "father is required",
                    })}
                    error={!!errors?.father}
                    helperText={errors?.father ? errors.father.message : null}
                  />
                </div>
                <br />
                <br />

                <div className="residency-form">
                  <TextField
                    label="Cnic"
                    variant="outlined"
                    required
                    type="text"
                    {...register("cnic", {
                      required: "cnic is required",
                    })}
                    error={!!errors?.cnic}
                    helperText={errors?.cnic ? errors.cnic.message : null}
                  />
                  <TextField
                    label="Phone"
                    variant="outlined"
                    required
                    type="text"
                    {...register("phone", {
                      required: "phone no is required",
                    })}
                    error={!!errors?.phone}
                    helperText={errors?.phone ? errors.phone.message : null}
                  />
                </div>
                <br />
                <br />

                <div className="residency-form">
                  <TextField
                    label="Email"
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
                  <TextField
                    variant="outlined"
                    label="Password"
                    placeholder="password"
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
                </div>
                <Grid
                  item
                  lg={12}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  marginTop={"40px"}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    onClick={() =>
                      router.push("/Tenant-System/Tenant-Dashboard")
                    }
                  >
                    Submit
                  </Button>{" "}
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
