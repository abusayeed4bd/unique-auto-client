import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';

import auth from '../../firebase.init';
import UpdateProfile from './UpdateProfile';

const MyProfile = () => {
    const [user] = useAuthState(auth);


    const { data: people, refetch } = useQuery('user', () => fetch(`https://unique-auto-parts.herokuapp.com/user/${user.email}`).then(res => res.json()))
    return (
        <div className='mt-8 h-screen w-[90%] mx-auto'>
            <h2 className="text-primary text-3xl">My Profile</h2>

            {people?.img && <img className='rounded-full w-40 h-40 mx-auto' src={people?.img} alt={people.email} />}
            <table className='table table-full w-full'>
                <thead>
                    <tr>
                        <td>Name:</td>
                        <td>{user.displayName}</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Email:</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr className='active'>
                        <td>LinkedIn:</td>
                        <td>{people?.linkedIn}</td>
                    </tr>
                    <tr>
                        <td>facebook:</td>
                        <td><a href={people?.facebook} >{people?.facebook}</a></td>
                    </tr>
                    <tr className='active'>
                        <td>Website:</td>
                        <td>{people?.website}</td>
                    </tr>

                </tbody>
            </table>




            <label for="my-modal-3" className="btn modal-button">Update Profile</label>
            <UpdateProfile user={user} refetch={refetch} />
        </div>
    );
};

export default MyProfile;