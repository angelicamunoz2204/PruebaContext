import react, {useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axios from 'axios';
import { GET_USERS, GET_PROFILE } from '../types';

const UserState = (props) => {
    const initialState = {
        users: [],
        selectedUser: null
    }

    const [state, dispatch] = useReducer(UserReducer, initialState)

    const getUsers = async() => {
        const res = await axios.get('http://localhost:3001/usuario');
        dispatch({
            type: GET_USERS,
            payload: res.data
        })
        //console.log(res.data)
    }
    
    const getProfile = async(id) => {
        const res = await axios.get('http://localhost:3001/usuario/' + id);
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
        //console.log(res.data)
    }
    
    return (
        <UserContext.Provider value = {{
            users: state.users,
            selectedUser: state.selectedUser,
            getUsers,
            getProfile
        }}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserState;