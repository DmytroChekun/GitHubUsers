const getUserData = ( userId, setUserData, setDescription ) => {

    fetch(`https://api.github.com/users/${userId}`)
        .then(response => {

            if (response.ok) {
                return response.json();
            }
            setDescription(response.status);
        })
        .then(userData => setUserData(userData))
        .catch((e) => {
            setDescription('Something wrong. Error: ' + e.message);

        });
}

export default getUserData;