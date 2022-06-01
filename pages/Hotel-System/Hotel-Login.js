import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import HotelIcon from "@mui/icons-material/Hotel";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function HotelLogin() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const response = await axios.post(
        "http://fyp-tenant.herokuapp.com/api/tenant/login",
        {
          email: data.username,
          password: data.password,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }

    reset();
  };
  return (
    <div>
      <Grid container className="login-container">
        <Paper elevation={10} className="paper-style">
          <Grid align="center">
            <Avatar className="avatarStyle">
              <HotelIcon />
            </Avatar>
            <h4
              style={{
                marginTop: "10px",
                color: "rgb(80 74 74)",
              }}
            >
              Sign In
            </h4>
          </Grid>
          {/* TextField */}
          <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="standard-basic1"
              label="Username"
              variant="outlined"
              fullWidth
              required
              type="email"
              {...register("username", {
                required: "username is required",
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "invalid email address",
                },
              })}
              error={!!errors?.username}
              helperText={errors?.username ? errors.username.message : null}
            />
            <br />
            <br />
            <TextField
              id="standard-basic2"
              label=" Password"
              variant="outlined"
              fullWidth
              required
              type="password"
              {...register("password", {
                required: "password is required",
                // pattern: {
                //   value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                //   message: "Invalid Password",
                // },
              })}
              error={!!errors?.password}
              helperText={errors?.password ? errors.password.message : null}
            />
            <br />
            <br />
            {/* Button */}
            <Button
              className="btnStyle"
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => router.push("/Hotel-System/Hotel-Dashboard")}
            >
              Sign In
            </Button>
          </form>
          <Typography style={{ marginTop: "10px" }}>
            <Link
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Forgot Password?
            </Link>
          </Typography>
          <Typography style={{ marginTop: "10px" }}>
            Don't have an account?
            <Link
              style={{
                textDecoration: "none",
                cursor: "pointer",
              }}
              onClick={() => router.push("/Hotel-System/Hotel-SignUp")}
            >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}
