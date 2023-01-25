import React, { useEffect, useState } from 'react';

const Home = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
    // console.log(user);

    return (
        <div>
            <h2> Hello from home page </h2>
            <br></br>
            <h3> Your token is: </h3> {user.token}
            <br></br>
            <br></br>
            <h3> Your email is: </h3> {user.email}
        </div>
    );
};

export default Home;