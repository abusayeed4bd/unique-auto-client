import React from 'react';
import { toast } from 'react-toastify';

const UpdateProfile = ({ user, refetch }) => {
    const email = user.email;
    const handleUpdateProfile = event => {
        event.preventDefault();
        const facebook = event.target.facebook.value;
        const linkedIn = event.target.linkedIn.value;
        const website = event.target.website.value;
        const img = event.target.img.value;
        const user = {
            facebook, linkedIn, website, img
        }

        fetch(`https://unique-auto-parts.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('data inside useToken', data);
                toast.success('profile updated')
                event.target.reset()
                refetch()

            })
    }
    return (
        <div>




            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative py-12">
                    <label for="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className="text-primary text-3xl font-bold">
                        Update Your Profile
                    </h2>
                    <form onSubmit={handleUpdateProfile} className='space-y-5'>
                        <div className="form-control">
                            <input type="text" name='linkedIn' className='input input-bordered' placeholder="LinkedIn Profile" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='facebook' className='input input-bordered' placeholder="Facebook Profile" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='website' className='input input-bordered' placeholder=" Website Link" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='img' className='input input-bordered' placeholder="photo url" />
                        </div>
                        <input className='btn btn-full ' type="submit" value="Submit" />
                    </form>
                </div>
                <button>click</button>
            </div>
        </div>
    );
};

export default UpdateProfile;