import React, { createContext, useState, useEffect, Children } from 'react';
import axios from 'axios';

const AuthContext = createContext();
export const AuthProvider = ({Children}) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            axios
            .get('http://localhost:5000/api/auth/me', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => setUser(response.data))
            .catch(() => setUser(null));
        }
    }, []);

    const login = async (email,password) => {
        try{
            const response = await axios.post('http://localhost:5000/api/auth/login', {email,password});
            localStorage.setItem('token', response.data.token);
            setUser(response.data.user);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return(
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;