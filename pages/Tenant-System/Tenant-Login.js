import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useRouter } from "next/router";
import { inputLabelClasses } from "@mui/material/InputLabel";
import VisibilityIcon from "@mui/icons-material/Visibility";
// import InputAdornment from "@mui/material/InputAdornment";

import { useForm } from "react-hook-form";

export default function TenantLogin() {
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

  return (
    <div>
      <Grid container className="login-container">
        <Paper elevation={10} className="paper-style">
          <Grid align="center">
            <Avatar className="avatarStyle">
              <AccountCircleIcon />
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
              id="standard-basic"
              label="Username"
              variant="standard"
              fullWidth
              required
              type="email"
              icon={<VisibilityIcon sx={{ color: "black" }} />}
              InputLabelProps={{
                sx: {
                  // color: "black",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "black",
                  },
                },
              }}
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
            />
            <br />
            <br />
            {/* <div style={{ display: "flex" }}> */}
            <TextField
              id="standard-basic"
              label=" Password"
              variant="standard"
              fullWidth
              required
              type="password"
              InputLabelProps={{
                sx: {
                  // color: "black",
                  [`&.${inputLabelClasses.shrink}`]: {
                    color: "black",
                  },
                },
              }}
              // {...register("password", {
              //   required: "password is required",
              // })}
              // error={!!errors?.password}
              // helperText={errors?.password ? errors.password.message : null}
            />
            {/* InputProps=
            {{
              startAdornment: {
                <InputAdornment>
                  <VisibilityIcon />
                </InputAdornment>
              },
            }} */}
            {/* <Button>Show</Button>
            </div> */}
            <br />
            <br />
            {/* Button */}
            <Button
              className="btnStyle"
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => router.push("/Tenant-System/Tenant-Dashboard")}
            >
              Sign In
            </Button>
          </form>
          <Typography style={{ marginTop: "10px" }}>
            <Link style={{ textDecoration: "none", cursor: "pointer" }}>
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
              onClick={() => router.push("/Tenant-System/Tenant-SignUp")}
            >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}
