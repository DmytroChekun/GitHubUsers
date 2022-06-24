import React from "react";


const userLayout = ({ userData, userId }) => {

    const { name, location, avatar_url, url } = userData;

    return (
        <>
            <img className="user__picture" src={ avatar_url } alt={ name } />
            <div className="user__info">
                <div className="user__name">{ name ? name : userId }</div>
                <div className="user__location">{ location }</div>
                <a href={ url } className="user__link"> User Profile </a>
            </div>
        </>
    );
}

export default userLayout;