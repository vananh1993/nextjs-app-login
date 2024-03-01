"use client";
// import { useState } from "react";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { checkNullAuthToken } from '@/app/helpers/authHelper';

import { useRouter } from "next/navigation";

const Profile = () => {
      const router = useRouter();
    const [data, setData] = useState({});

    if (checkNullAuthToken()) {
        // console.log(222);
        return (<p>Please Login </p>)
    }
    useEffect(() => {
        axios.get('https://dvinci.pro/the-gioi-an-dam-training/api/api/profile', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('apiToken')}`,
                'Content-Type': 'application/json'
            },
            })
        .then(response => {
            
            return setData(response.data);
            // console.log(populateData);
        })
        .catch(error => {
            console.error('Error:', error);
        
        });
    }, []);
    // const {user} = response.data;
    // console.log(response );
    // console.log(data)
    return (
        <div>
            <h1>Profile Page</h1>
            <p> Name : {data.user?.name}</p>
            <p> Email : {data.user?.email}</p>
            <p> Role : {data.role}</p>
        </div>
        
    )
}

export default Profile;