"use client";
// import { useState } from "react";
import axios from 'axios';
// import UsersTable from "@/components/users/users.table";

// async function getArtist() {
//   const res = await fetch("https://dvinci.pro/the-gioi-an-dam-training/api/api/user/all")
//   return res.json()
// }

const UsersPage = async () => {
    console.log(8);

    const response = await axios.get("https://dvinci.pro/the-gioi-an-dam-training/api/api/user/all");
    const {users} = response.data;

    console.log(users);
    // const LIMIT = 5;
    // const page = props?.searchParams?.page ?? 1;

    // const [users, setUsers] = useState({});

    // const res = await fetch(
    //     "https://dvinci.pro/the-gioi-an-dam-training/api/api/user/all",
    //     {
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //         }
    //     }
    // )
    // // .then((response) => {
    // //     setUsers(response.json().users);
    // // })
    // // const total_items = +(res.headers?.get("X-Total-Count") ?? 0)

    // // const data = await res.json().users;

    // // // return console.log(data);

    // const tasks = data.map((task) => {
    //     return (
    //       <div>{task.email}</div>
    //     )
    //   });
    // const data = await getArtist()
    // console.log(data);
    return (
        <div>
            <div>dgd</div>
            <table>
                <tbody>
                    {users.map((user) => (
                        <tr>
                            <td>{user.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersPage;