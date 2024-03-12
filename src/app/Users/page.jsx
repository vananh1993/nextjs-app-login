'use client'

import {useEffect, useState} from 'react';
import List from "@/components/ListUsers";
import axios from 'axios'
import isAuth from "@/helpers/isAuth";
import request from '@/requests';

const ListUser = () => {
  const [users, setUsers] = useState([]);

  const loadUsers = () => {
    request.get("user/all")
        .then(({data}) => {
          // console.log(data);
          setUsers(data.users)
        });
  };

  useEffect(() => {
    loadUsers();
  }, []);
  
  return (
    <div className=" users">
      <List users={users}></List>
    </div>
  );
};

export default ListUser;
// export default isAuth(ListUser);