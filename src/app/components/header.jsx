'use client'
import Link from "next/link";
import { removeAuthToken } from '@/app/helpers/authHelper';
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import {useLayoutContext} from '../contexts/layoutContext';


const Nav = () => {
    const router = useRouter();
    
    const {layoutState, layoutDispatch} = useLayoutContext();
    // const [isAuthen, setIsAuthen] = useState(false)
    // console.log(222, layoutState);

    const handleLogout = () => {
        // console.log(111111);
        removeAuthToken();
        layoutDispatch({type: 'SET_LOGIN_STATUS', payload: false});
        // router.refresh();
        router.push('/LoginUser');
    };
    // useEffect(() => {
    //     setIsAuthen(layoutState.login_status)
    // }, [])

    // console.log(layoutState.login_status);
    return (
    <nav className="bg-gray-600 text-black-100">
        <div className="flex justify-between items-center w-full px-10 py-4">
            <div>My Site</div>
            <div className="flex gap-10">
                <Link href="/">Home</Link>
                <Link href="/Users">Users</Link>
                <Link href="/Profile">Profile</Link>
                
                {layoutState.login_status ? (
                    <>
                        <Link href="/CreateUser">Creat User</Link> 
                        <button onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <>
                        <Link href="/LoginUser">Login</Link>
                        <Link href="/Register">Register</Link>
                    </>
                )}
            </div>
        </div>
    </nav>
    );
};

export default Nav;