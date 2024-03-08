"use client";
// import { useState } from "react";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { getAuthToken } from '@/app/helpers/authHelper';
import {useLayoutContext} from '../contexts/layoutContext';
import { useRouter } from "next/navigation";
import isAuth from "@/app/helpers/isAuth";


const Profile = () => {
    const router = useRouter();
    const [data, setData] = useState({});

    // const {layoutState, layoutDispatch} = useLayoutContext();

    // if (!layoutState.login_status) {
    // // router.refresh();
    //     return (<p>Please Login </p>)
    // }
    // console.log(getAuthToken());
    useEffect(() => {
        axios.get('https://dvinci.pro/the-gioi-an-dam-training/api/api/profile', {
            headers: {
                'Authorization': `Bearer ${getAuthToken()}`,
                'Content-Type': 'application/json'
            },
            })
        .then(response => {
            // console.log(response.data);
            return setData(response.data);
            // console.log(populateData);
        })
        .catch(error => {
            console.error('Error:', error);
        
        });
    }, [data]);
    return (
        <>
            <h1>Profile Page</h1>
            <p> Name : {data.user?.name}</p>
            <p> Email : {data.user?.email}</p>
            <p> Role : {data.role}</p>
        </>
        
    )
}

// export default Profile;
export default isAuth(Profile);