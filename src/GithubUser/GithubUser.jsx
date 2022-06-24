import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import getUserData from "./userGateway";
import UserLayout from  './UserLayout';
import './GithubUser.css';

const GithubUser = ( { searchValue } ) => {

    const [ userData, setUserData ] = useState(null);
    const [ description, setDescription ] = useState('');

    const { userId } = useParams();

    useEffect(()=> {
        getUserData( userId, setUserData, setDescription );
    }, [searchValue])

    if (!userData) {
        return <span>{ description }</span>
    }


    return (
        <UserLayout userData={ userData } userId={ userId } />
    );
}

export default GithubUser;