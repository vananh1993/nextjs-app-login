"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import {useLayoutContext} from '../contexts/layoutContext';

const UserForm = () => {
  const router = useRouter();
  // const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit } = useForm()

  const {layoutState} = useLayoutContext();
  
  if (layoutState.login_status) {
    // router.refresh();
    return router.push("/");
  }

  const onSubmit = async (data) => {
    // e.preventDefault();
    setErrorMessage("");
    const res = await fetch('https://dvinci.pro/the-gioi-an-dam-training/api/api/register', {
      method: "POST",
      body: JSON.stringify({ ...data }),
      headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    }, 5000);

    if (!res.ok) {
      const response = await res.json();
      setErrorMessage(response.message);
    } else {
      router.refresh();
      router.push("/");
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

    <p>{errorMessage}</p>
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