import React from "react";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import HouseIcon from "@mui/icons-material/House";

export default function AddResidency() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  let token = "";
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  const url = "https://fyp-tenant.herokuapp.com/api/tenant/residence";

  const onSubmit = async (data) => {
    console.log("Token ", token);
    const data = {
      residence: {
        own_name: data.name,
        own_cnic: data.cnic,
        own_father: data.father,
        own_phone: data.phone,
        address: data.address,
      },
    };
    try {
      const response = await axios.post(url, data, {
        headers: { Authorization: "Bearer " + token },
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    reset();
  };
  return (
    <div className="residency-div">
      <Paper elevation={10} className="residency-paper">
        <Grid container>
          <Grid item lg={12} textAlign="center" paddingTop={"10px"}>
            <HouseIcon />
            <h3>Add Residency</h3>
          </Grid>
        </Grid>

        <form autoComplete="off" noValidate onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            align="center"
            // border={"2px solid red"}
            paddingTop={"15px"}
          >
            <Grid item lg={6} padding={"10px"}>
              <TextField
                label="Qwner"
                required
                type="text"
                variant="outlined"
                {...register("name", {
                  required: "name is required",
                })}
                error={!!errors?.name}
                helperText={errors?.name ? errors.name.message : null}
              />
            </Grid>
            <Grid item lg={6} padding={"10px"}>
              <TextField
                label="Owner_cnic"
                variant="outlined"
                required
                type="text"
                {...register("cnic", {
                  required: "cnic is required",
                })}
                error={!!errors?.cnic}
                helperText={errors?.cnic ? errors.cnic.message : null}
              />
            </Grid>

            <Grid item lg={6} padding={"10px"}>
              <TextField
                label="father"
                variant="outlined"
                required
                type="text"
                {...register("father", {
                  required: "father name is required",
                })}
                error={!!errors?.father}
                helperText={errors?.father ? errors.father.message : null}
              />
            </Grid>
            <Grid item lg={6} padding={"10px"}>
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
            </Grid>
            <Grid item lg={6} padding={"10px"}>
              <TextField
                id="outlined-multiline-static"
                variant="outlined"
                label="Address"
                multiline
                rows={3}
                sx={{ width: 220 }}
                type="text"
                {...register("address", {
                  required: "address is required",
                })}
                error={!!errors?.address}
                helperText={errors?.address ? errors.address.message : null}
                required
              />
            </Grid>

            <Grid item lg={12} textAlign="center" padding={"10px"}>
              <Button
                variant="contained"
                type="submit"
                // onClick={() => router.push("/Tenant-System/Tenant-Dashboard")}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}
