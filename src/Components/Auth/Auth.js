import React, {useEffect, useState} from 'react'
import app from '../Firebase/Firebase'
import {setCurrentUser} from "../../redux/auth-reducer";
import {connect} from "react-redux";

export const AuthContext = React.createContext()

const AuthProvider = ({children, ...props}) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser)
    }, [])

    if (currentUser) {
        props.setCurrentUser(currentUser)
    }

    return (
        <AuthContext.Provider
            value={{currentUser}}
            >
            {children}
        </AuthContext.Provider>
    )
}

export default connect(null, {setCurrentUser})(AuthProvider)