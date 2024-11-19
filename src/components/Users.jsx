import React, { useEffect, useState } from 'react'
import { apiGetUser } from '../services/chat';

const Users = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await apiGetUser();
      setUser(response.data)
      console.log(user)
    };
    fetchUser();
  }, []);

  return (
    <div>
      <div className='border shadow rounded h-96 w-full sm:w-60 sm:float-right border-b-[1px] mt-5 p-4 bg-white'>
        Users
        {/* {
          user.map((user, index) => {
            return (<div key={index}>
              <div>
              <p>{user.userName}</p>
              </div>
            </div>
            );
          })
        } */}
      </div>
    </div>
  )
}

export default Users;