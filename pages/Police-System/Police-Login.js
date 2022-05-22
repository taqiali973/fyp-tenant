import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { useRouter } from "next/router";

// import { makeStyles } from "@mui/styles";

import { useForm } from "react-hook-form";
// const useStyles = makeStyles({
//   root: {
//     "& .MuiFormLabel-root": {
//       backgroundColor: "red", // or black
//     },
//   },
// });

export default function PoliceLogin() {
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
  // const paperStyle = {
  //   padding: 30,
  //   width: 500,
  //   borderRadius: "30px",
  //   background: "rgb(242 238 238)",
  // };

  // const avatarStyle = {
  //   background: "rgb(80 74 74)",
  // };
  // const btnStyle = {
  //   margin: "10px 0",
  //   background: "rgb(80 74 74)",
  // };

  return (
    <div>
      <Grid container className="login-container">
        <Paper elevation={10} className="paper-style">
          <Grid align="center">
            <Avatar className="avatarStyle">
              <LocalPoliceIcon />
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
            <br />
            <br />
            {/* Button */}
            <Button
              className="btnStyle"
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => router.push("/Police-dashboard")}
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </Grid>
    </div>
  );
}
