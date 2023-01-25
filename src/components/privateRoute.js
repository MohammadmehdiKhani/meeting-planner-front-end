import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
 
const PrivateRoute = ({children}) => {
    
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    return user? children: <Redirect to="/login"></Redirect>;
};

export default PrivateRoute;