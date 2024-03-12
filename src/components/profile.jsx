"use client";
// import { useState } from "react";
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { getAuthToken } from '@/helpers/authHelper';
import {useLayoutContext} from '../contexts/layoutContext';
import { useRouter } from "next/navigation";
import isAuth from "@/helpers/isAuth";
import request from '@/requests';


const Profile = () => {
    const router = useRouter();
    const [data, setData] = useState({});

    // const {layoutState, layoutDispatch} = useLayoutContext();

    // if (!layoutState.login_status) {
    // // router.refresh();
    //     return (<p>Please Login </p>)
    // }
    // console.log(getAuthToken());
    // console.log(request.ignoresAuth());
    useEffect(() => {
        // console.log(request.ignoresAuth());
        request.get('profile').then(response => {
            // console.log(response.data);
            return setData(response.data);
            // console.log(populateData);
        })
        .catch(error => {
            console.error('Error:', error);
        
        });
    }, []);
    return (
        <>
            <h1>Profile Page</h1>
            <p> Name : {data.user?.name}</p>
            <p> Email : {data.user?.email}</p>
            <p> Role : {data.role}</p>
        </>
        
    )
}

export default Profile;
// export default isAuth(Profile);