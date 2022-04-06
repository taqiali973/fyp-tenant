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
  const paperStyle = {
    padding: 30,
    width: 500,
    borderRadius: "30px",
  };

  const avatarStyle = {
    backgroundColor: "#1a1515",
  };
  const btnStyle = {
    margin: "10px 0",
  };
  return (
    <div>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <AccountCircleIcon />
            </Avatar>
            <h4 style={{ marginTop: "10px" }}>Sign In</h4>
          </Grid>
          {/* TextField */}
          <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              label="Username"
              placeholder="Enter Username"
              variant="outlined"
              fullWidth
              required
              type="email"
              {...register("username", {
                required: "username is required",
                pattern: {
                  value:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid Email Address",
                },
              })}
              error={!!errors?.username}
              helperText={errors?.username ? errors.username.message : null}
              style={{ marginBottom: "20px" }}
            />
            <TextField
              label=" Password"
              placeholder="Enter Password"
              variant="outlined"
              type="password"
              fullWidth
              required
              {...register("password", {
                required: "password is required",
              })}
              error={!!errors?.password}
              helperText={errors?.password ? errors.password.message : null}
            />
            {/* Button */}
            <Button
              style={btnStyle}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Sign In
            </Button>
          </form>
          <Typography style={{ marginBottom: "3px" }}>
            <Link style={{ textDecoration: "none", cursor: "pointer" }}>
              Forgot Password?
            </Link>
          </Typography>
          <Typography>
            Don't have an account?
            <Link
              style={{ textDecoration: "none", cursor: "pointer" }}
              onClick={() => router.push("/Tenant-SignUp")}
            >
              Sign Up
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}
