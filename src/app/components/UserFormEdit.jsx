'use client'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useForm, SubmitHandler } from "react-hook-form"
import React, { useEffect, useMemo } from "react";
import axios from 'axios'
import { getAuthToken } from '@/app/helpers/authHelper';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  
const EditUser = (props) => {
    // console.log(props);
    const {
        isUpdateModalOpen, setIsUpdateModalOpen, dataUpdate, setDataUpdate
    } = props;

    const handleCloseCreateModal = () => {
        setIsUpdateModalOpen(false);
        setDataUpdate(null);
        // console.log(dataUpdate);
    }

    const { register, reset, handleSubmit } = useForm({
        defaultValues: useMemo(() => {
        //   console.log("User has changed");
          return dataUpdate;
        }, [dataUpdate])
    });
    useEffect(() => {
        reset(dataUpdate);
    }, [dataUpdate]);
    

    const onSubmit = async (data) => {
        // e.preventDefault();
        // setErrorMessage("");
        // console.log(data);
        axios.put(`https://dvinci.pro/the-gioi-an-dam-training/api/api/users/${dataProps?.id}`, { ...data },  {
            headers: {
                'Authorization': `Bearer ${getAuthToken()}`,
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
            <Modal
            open={isUpdateModalOpen}
            onClose={() => handleCloseCreateModal()}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box  sx={style} >
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        method="post"
                        className="flex flex-col gap-3 w-2/2"
                        autoComplete="nope"
                    >
                        <h1 className="text-center">Edit User</h1>
                        <label>Full Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="off"
                            {...register("name")}
                            required={true}
                            // defaultValue={dataUpdate?.name}
                            className="m-2 bg-slate-400 rounded"
                        />
                        <label>Email</label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            autoComplete="off"
                            {...register("email")}
                            // defaultValue={dataUpdate?.email}
                            required={true}
                            className="m-2 bg-slate-400 rounded"
                        />
                        <label>New Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="off"
                            {...register("password")}
                            // defaultValue={dataUpdate?.password}
                            // required={true}
                            className="m-2 bg-slate-400 rounded"
                        />
                        <input
                            type="submit"
                            value="Edit User"
                            className="bg-blue-300 hover:bg-blue-100"
                        />
                    </form>
                </Box>
            </Modal>
        </div>
    );
};

export default EditUser;