import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LockIcon from "@mui/icons-material/Lock";
import Avatar from "@mui/material/Avatar";
import { useForm } from "react-hook-form";

function Signup() {
  const paperStyle = {
    width: "40vw",
    padding: "20px 0px",
  };

  const avatarStyle = {
    backgroundColor: "#1a1515",
  };
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
    <Grid
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Sign Up</h2>
        </Grid>

        <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={5}
            style={{
              width: "90%",
              margin: "0px auto",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid item lg={6}>
              <Typography align="center">
                <TextField
                  label="Username"
                  placeholder="Enter Username"
                  variant="outlined"
                  required
                  {...register("username", {
                    required: "username is required",
                  })}
                  error={!!errors?.username}
                  helperText={errors?.username ? errors.username.message : null}
                />
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography align="center">
                <TextField
                  label="Cnic"
                  placeholder="00000-00000-0"
                  variant="outlined"
                  required
                  type="number"
                  {...register("cnic", {
                    required: "cnic is required",
                  })}
                  error={!!errors?.cnic}
                  helperText={errors?.cnic ? errors.cnic.message : null}
                />
              </Typography>
            </Grid>

            <Grid item lg={6}>
              <Typography align="center">
                <TextField
                  label="phone no "
                  placeholder="Enter phone_no"
                  variant="outlined"
                  required
                  type="number"
                  {...register("phone_no", {
                    required: "phone no is required",
                  })}
                  error={!!errors?.phone_no}
                  helperText={errors?.phone_no ? errors.phone_no.message : null}
                />
              </Typography>
            </Grid>

            <Grid item lg={6}>
              <Typography align="center">
                <TextField
                  label="email"
                  placeholder="Enter email"
                  variant="outlined"
                  required
                  type="email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Invalid Email Address",
                    },
                  })}
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : null}
                />
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography align="center">
                <TextField
                  label="password"
                  placeholder="Enter Password"
                  variant="outlined"
                  required
                  type="password"
                  {...register("password", {
                    required: "password is required",
                  })}
                  error={!!errors?.password}
                  helperText={errors?.password ? errors.password.message : null}
                />
              </Typography>
            </Grid>
            <Grid item lg={6}>
              <Typography align="center">
                <TextField
                  id="standard-multiline-static"
                  label="Address"
                  multiline
                  style={{ width: "220px" }}
                  rows={5}
                  variant="outlined"
                  required
                  type="text"
                  {...register("address", {
                    required: "address is required",
                  })}
                  error={!!errors?.address}
                  helperText={errors?.address ? errors.address.message : null}
                />
              </Typography>
            </Grid>

            <Grid
              item
              lg={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  );
}

export default Signup;
