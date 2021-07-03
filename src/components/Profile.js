import React,{useContext} from 'react';
import UserContext from '../context/user/UserContext';

const Profile = () => {
    const {selectedUser} = useContext(UserContext);

    return (
        <>
           {
                selectedUser? 
                    (<div>
                        <h1>
                            Nombre : {selectedUser[0].name}
                        </h1>
                        <h3>
                            Email: {selectedUser[0].email}
                        </h3>
                    </div>)
                : (<h1>No user selected</h1>)
           }
        </>
    )
}

export default Profile
