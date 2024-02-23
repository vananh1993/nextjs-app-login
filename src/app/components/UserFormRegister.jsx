"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
// import FormControl from '@mui/material/FormControl';
// or
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, Button, Grid, Container } from "@mui/material";



const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    // const email = e.target.email;
    // const password = e.target.password;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .matches(/^[a-zA-Z]+$/, "Username must contain only letters")
      .min(3, "Username must be at least 3 characters")
      .max(15, "Username must be at most 15 characters")
      .required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    console.log('dbsjfbj');
    const res = await fetch(`${process.env.NEXT_URL_BACKEND}/users`, {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form>
          <Container maxWidth="xs">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  name="username"
                  as={TextField}
                  label="Username"
                  onChange={handleChange}
                  value={formData.name}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="email"
                  as={TextField}
                  label="Email"
                  onChange={handleChange}
                  value={formData.email}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="password"
                  type="password"
                  as={TextField}
                  onChange={handleChange}
                  label="Password"
                  value={formData.password}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="confirmPassword"
                  type="password"
                  as={TextField}
                  label="Confirm Password"
                  error={
                    touched.confirmPassword && Boolean(errors.confirmPassword)
                  }
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;