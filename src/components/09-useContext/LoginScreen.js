import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginScreen = () => {

    // 1. Obtener referencia al context UserContext
    // 2. setUser

    const { setUser } = useContext( UserContext );

    return (
        <div>
            <h1>LoginScreen</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={ () => setUser({
                    id: 1115076545,
                    name: 'Martin Santos'
                }) }
            >
                Login
            </button>
            
        </div>
    )
}
