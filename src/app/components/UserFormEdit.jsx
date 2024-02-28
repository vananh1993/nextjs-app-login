// import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useForm, SubmitHandler } from "react-hook-form"
import React, { useState } from "react";

const EditUser = (props) => {
    console.log(props);
    const {
        isUpdateModalOpen, setIsUpdateModalOpen, dataUpdate
    } = props;
    console.log(isUpdateModalOpen)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleCloseCreateModal = () => {
        setIsCreateModalOpen(false);

    }

    const { register, handleSubmit } = useForm()

    const onSubmit = async (data) => {
        // e.preventDefault();
        setErrorMessage("");

        axios.get(`https://dvinci.pro/the-gioi-an-dam-training/api/api/users/${dataUpdate}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('apiToken')}`,
                'Content-Type': 'application/json'
            },
            })
        .then(response => {
            handleCloseCreateModal();
            // return setData(response.data.user);
            // console.log(populateData);
        })
        .catch(error => {
            console.error('Error:', error);
        
        });
      }

    return (
        <div>
            {/*<Button onClick={handleOpen}>Open modal</Button>*/}
            <Modal
            open={isUpdateModalOpen}
            onClose={() => handleCloseCreateModal()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
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
                    value="Edit User"
                    className="bg-blue-300 hover:bg-blue-100"
                    />
                </form>
            </Modal>
        </div>
    );
};

export default EditUser;