import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
// import { makeStyles } from "@mui/styles";

import HotelIcon from "@mui/icons-material/Hotel";
import { inputLabelClasses } from "@mui/material/InputLabel";

import { useForm } from "react-hook-form";
// const useStyles = makeStyles({
//   textField: {
//     border: "1px solid black",
//   },
// });
export default function HotelLogin() {
  // const classes = useStyles();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  const paperStyle = {
    padding: 30,
    width: 500,
    borderRadius: "30px",
    background: "rgb(242 238 238)",
  };

  const avatarStyle = {
    background: "rgb(80 74 74)",
  };
  const btnStyle = {
    margin: "10px 0",
    background: "rgb(80 74 74)",
  };
  return (
    <div>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "10%",
        }}
      >
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <HotelIcon />
            </Avatar>
            <h4
              style={{
                marginTop: "10px",
                color: "rgb(80 74 74)",
                fontFamily: "cursive",
              }}
            >
              Sign In
            </h4>
          </Grid>
          {/* TextField */}
          <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Username"
              InputLabelProps={{
                sx: {
                  color: "black",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "black",
                  },
                },
              }}
              // className={classes.textField}
              placeholder="Enter Username"
              variant="outlined"
              fullWidth
              required
              type="email"
              // {...register("username", {
              //   required: "username is required",
              //   pattern: {
              //     value:
              //       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              //     message: "Invalid Email Address",
              //   },
              // })}
              // error={!!errors?.username}
              // helperText={errors?.username ? errors.username.message : null}
              style={{ marginBottom: "20px" }}
            />
            <TextField
              label=" Password"
              placeholder="Enter Password"
              variant="outlined"
              type="password"
              fullWidth
              required
              // {...register("password", {
              //   required: "password is required",
              // })}
              // error={!!errors?.password}
              // helperText={errors?.password ? errors.password.message : null}
            />
            {/* Button */}
            <Button
              style={btnStyle}
              sx={{ fontFamily: "cursive" }}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => router.push("/Hotel-Dashboard")}
            >
              Sign In
            </Button>
          </form>
          <Typography style={{ marginTop: "10px", fontFamily: "cursive" }}>
            <Link
              style={{
                textDecoration: "none",
                cursor: "pointer",
                fontFamily: "cursive",
              }}
            >
              Forgot Password?
            </Link>
          </Typography>
          <Typography style={{ marginTop: "10px", fontFamily: "cursive" }}>
            Don't have an account?
            <Link
              style={{
                textDecoration: "none",
                cursor: "pointer",
                fontFamily: "cursive",
              }}
              onClick={() => router.push("/Hotel-SignUp")}
            >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}
