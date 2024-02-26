"use client";
// import { useState } from "react";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { checkNullAuthToken } from '@/app/helpers/authHelper';

import { useRouter } from "next/navigation";
// import { setAuthToken, hasAuthToken } from '@/app/helpers/authHelper';

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
            
            return setData(response.data.user);
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
            <p> Name : {data.name}</p>
            <p> Email : {data.email}</p>
        </div>
        
    )
}

export default Profile;