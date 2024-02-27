"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios';


const UsersPage = (props) => {

    const { id } = props;
    const [data, setData] = useState({});
    
    // console.log(id);
    useEffect(() => {
        axios.get(`https://dvinci.pro/the-gioi-an-dam-training/api/api/users/${id}`, {
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
                <div>Only Admin role can view</div>
            )}
            
        </div>
    )
}

export default UsersPage;