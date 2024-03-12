"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { getAuthToken } from '@/helpers/authHelper';
import isAuth from "@/helpers/isAuth";
import request from '@/requests';


const UsersPage = (props) => {

    const { id } = props;
    const [data, setData] = useState({});
    
    // console.log(id);
    useEffect(() => {
        // axios.get(`https://dvinci.pro/the-gioi-an-dam-training/api/api/users/${id}`, {
        //     headers: {
        //         'Authorization': `Bearer ${getAuthToken()}`,
        //         'Content-Type': 'application/json'
        //     },
        //     })
        request.get(`users/${id}`, {...data})
        .then(response => {
            
            return setData(response.data.user);
            // console.log(populateData);
        })
        .catch(error => {
            // console.error('Error:', error);
        
        });
    }, []);
    // console.log(data);
    return (
        <div>
            {data.email? (
                <div>
                    <div>User Information</div>
                    <p> Name : {data.name}</p>
                    <p> Email : {data.email}</p>
                </div>
            ) : (
                <div>Please Login</div>
            )}
            
        </div>
    )
}

export default UsersPage;
// export default isAuth(UsersPage);