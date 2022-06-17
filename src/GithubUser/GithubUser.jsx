import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import './GithubUser.css';

const GithubUser = ( { searchValue, description, setDescription } ) => {
    const [ userData, setUserData ] = useState(null);
    const { userId } = useParams();
    useEffect(()=> {
        fetch(`https://api.github.com/users/${userId}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                setDescription(response.status);



            })
            .then(userData => setUserData(userData))
            .then(userData => console.log(userData))
            .catch((e) => {
                console.log(setDescription('Something wrong. Error: ' + e.message));
            });
    }, [searchValue])

    if (!userData) {
        return <span>{description}</span>
    }

    const { name, location, avatar_url } = userData;

    return (
        <>
            <img className="user__picture" src={avatar_url} alt={name} />
            <div className="user__info">
                <div className="user__name">{name}</div>
                <div className="user__location">{location}</div>
            </div>
        </>
    );
}

export default GithubUser;