"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
// import FormControl from '@mui/material/FormControl';
// or
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { TextField, Button, Grid, Container } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form"


const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   // const email = e.target.email;
  //   // const password = e.target.password;
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };
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

  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    // e.preventDefault();
    setErrorMessage("");
    const res = await fetch('http://localhost:8000/users', {
      method: "POST",
      body: JSON.stringify({ ...data }),
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
  }
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setErrorMessage("");
  //   const res = await fetch('http://localhost:8000/users', {
  //     method: "POST",
  //     body: JSON.stringify({ formData }),
  //     headers: {
  //         "Content-Type": "application/json",
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //   });

  //   if (!res.ok) {
  //     const response = await res.json();
  //     setErrorMessage(response.message);
  //   } else {
  //     router.refresh();
  //     router.push("/");
  //   }
  // };

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    method="post"
    className="flex flex-col gap-3 w-1/2"
  >
    <h1>Create New User</h1>
    <label>Full Name</label>
    <input
      id="name"
      name="name"
      type="text"
      // onChange={handleChange}
      {...register("name")}
      required={true}
      // value={formData.name}
      className="m-2 bg-slate-400 rounded"
    />
    <label>Email</label>
    <input
      id="email"
      name="email"
      type="text"
      {...register("email")}
      // onChange={handleChange}
      required={true}
      // value={formData.email}
      className="m-2 bg-slate-400 rounded"
    />
    <label>Password</label>
    <input
      id="password"
      name="password"
      type="password"
      {...register("password")}
      // onChange={handleChange}
      required={true}
      // value={formData.password}
      className="m-2 bg-slate-400 rounded"
    />
    <input
      type="submit"
      value="Create User"
      className="bg-blue-300 hover:bg-blue-100"
    />
  </form>
  );
};

export default UserForm;