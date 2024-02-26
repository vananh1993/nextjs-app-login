'use client'
import Link from "next/link";
import { useEffect } from "react";
import { removeAuthToken } from '@/app/helpers/authHelper';
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Nav = () => {
    const router = useRouter();
    const [Token, setToken] = useState("");

    useEffect(() => {
        setToken(localStorage.getItem('apiToken'))
    }, [])
    const handleLogout = () => {
        // console.log(111111);
        removeAuthToken();
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
            
            {Token ? (
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