"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from 'axios';
// import FormControl from '@mui/material/FormControl';
// or
// import { Formik, Form, Field } from "formik";
// import * as Yup from "yup";
// import { TextField, Button, Grid, Container } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form"
import { setAuthToken, hasAuthToken } from '@/app/helpers/authHelper';
import {useLayoutContext} from '../contexts/layoutContext';


const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const {layoutState, layoutDispatch} = useLayoutContext();

  if (layoutState.login_status) {
    // router.refresh();
    router.push("/");
  }

  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    // e.preventDefault();
    setErrorMessage("");

    try {
      const res = await axios.post('https://dvinci.pro/the-gioi-an-dam-training/api/api/login', {...data});
// 
      console.log(res.data);
      setAuthToken(JSON.stringify([res.data.token, res.data.role]));
      // localStorage.setItem('apiRole', res.data.role)
      layoutDispatch({type: 'SET_LOGIN_STATUS', payload: true});
      router.refresh();
      router.push("/");
    } catch ({response}) {
      if (response.status === 422) {
        setErrorMessage(Object.values(response.data.errors)[0][0]);
      }
    }   
  }

  return (
    <form
    onSubmit={handleSubmit(onSubmit)}
    method="post"
    className="flex flex-col gap-3 w-1/2"
  >
    <h1>Create New User</h1>
    <label>Full Name</label>
    <p className="text-red-500">{errorMessage}</p>
    <label>Email</label>
    <input
      id="email"
      name="email"
      type="text"
      {...register("email")}
      // onChange={handleChange}
      required={true}
      value={formData.email}
      // value="vananh.test@gmail.com"
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
      value="Login"
      className="bg-blue-300 hover:bg-blue-100"
    />
  </form>
  );
};

export default UserForm;