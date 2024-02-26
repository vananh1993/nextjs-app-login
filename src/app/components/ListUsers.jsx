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
import { checkNullAuthToken } from '@/app/helpers/authHelper';

const UsersPage = (props) => {
    const {users} = props;
    // const [errorMessage, setErrorMessage] = useState("");
    if (checkNullAuthToken()) {
        // console.log(1111);
       return (<p>Please Login </p>)
    }
    // console.log(localStorage.getItem('apiToken'));
    
    // console.log(users);
    return (
        
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">NAME</TableCell>
                    <TableCell align="left">EMAIL</TableCell>
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
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.email}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UsersPage;