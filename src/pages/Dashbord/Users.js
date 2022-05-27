import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import UserRaw from './UserRaw'

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        < div >
            <h2 className='text-3xl text-primary font-bold'>Users: {users.length}</h2>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            users.map((user, index) => <UserRaw key={user._id} refetch={refetch} user={user} index={index}></UserRaw>)
                        }
                    </tbody>
                </table>
            </div>
        </ div>
    );
};

export default Users;