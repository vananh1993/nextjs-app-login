"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
// import FormControl from '@mui/material/FormControl';
// or
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios';
import { checkNullAuthToken } from '@/app/helpers/authHelper';

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  if (checkNullAuthToken()) {
    return (<p>Please Login </p>)
  }
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
    // e.preventDefault();
    setErrorMessage("");

    axios.post('https://dvinci.pro/the-gioi-an-dam-training/api/api/users', {...data}, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('apiToken')}`,
            'Content-Type': 'application/json'
        },
    })
    .then(response => {
        router.refresh();
        // router.push("/");
        // return setData(response.data.user);
        // console.log(populateData);
    })
    .catch(error => {
        console.error('Error:', error);
        // setErrorMessage(error);
    });
  }


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