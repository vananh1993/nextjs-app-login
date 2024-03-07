"use client";
// import { useState } from "react";
// import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { checkNullAuthToken } from '@/app/helpers/authHelper';
// import { Link } from 'react-router-dom';
import EditUser from '@/components/UserFormEdit'
import { useState, useEffect } from "react";
import {useLayoutContext} from '../contexts/layoutContext';

import isAuth from "@/app/helpers/isAuth";

const UsersPage = (props) => {
    const {users} = props;
    const {layoutState} = useLayoutContext();
    // const [errorMessage, setErrorMessage] = useState("");
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    // if (!layoutState.login_status) {
    //     // console.log(1111);
    //    return (<p>Please Login </p>)
    // }
    useEffect(() => {
        if (JSON.parse(localStorage.getItem('apiToken'))?.role == 'admin') {
            // console.log(1111);
            setIsAdmin(true);
        }
    });
    

    // console.log(localStorage.getItem('apiToken'));
    
    // console.log(users);
    return (
        <div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell align="left">NAME</TableCell>
                        <TableCell align="left">EMAIL</TableCell>
                        {isAdmin ? (
                          <TableCell align="left">Edit</TableCell>
                        ) : (
                            ""
                        )}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {users.map((row) => (
                        <TableRow
                        key={row.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell align="left"  color="success"><a href={`/Profile/${row.id}`}>{row.name}</a> </TableCell>
                        <TableCell align="left">{row.email}</TableCell>
                        {isAdmin ? (
                           <TableCell align="left" 
                           onClick={() => {
                               setIsUpdateModalOpen(true);
                               setDataUpdate(row);
                           }}
                       >Edit</TableCell>
                        ) : (
                            ""
                        )}
                        {/* {isAdmin ? (
                           
                        )} */}
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer >
            <EditUser 
                isUpdateModalOpen={isUpdateModalOpen}
                setIsUpdateModalOpen={setIsUpdateModalOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
                />
        </div>
    )
}

// export default UsersPage;
export default isAuth(UsersPage);