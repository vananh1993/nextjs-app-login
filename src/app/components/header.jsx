'use client'
import Link from "next/link";
import { getAuthToken, removeAuthToken } from '@/app/helpers/authHelper';
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Nav = () => {
    const router = useRouter();
    let token = localStorage.getItem('apiToken');
    useEffect(() => {
        let token = localStorage.getItem('apiToken');
      }, [])
    // console.log(token);
    const handleLogout = () => {
        // console.log(111111);
        removeAuthToken();
        token = localStorage.getItem('apiToken');
        router.refresh();
        router.push('/LoginUser');
    };
    
    return (
    <header className="bg-gray-600 text-black-100">
        <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>My Site</div>
        <div className="flex gap-10">
            <Link href="/">Home</Link>
            <Link href="/Users">Users</Link>
            <Link href="/Profile">Profile</Link>
            
            {token? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <Link href="/LoginUser">Login</Link>
            )}
        </div>
        </nav>
    </header>
    );
};

export default Nav;