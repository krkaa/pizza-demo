import React, {useEffect, useState} from 'react'
import app from '../Firebase/Firebase'
import {setCurrentUser, setIsAuth} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {requestMenu} from "../../redux/menu-reducer";

export const AuthContext = React.createContext()

const AuthProvider = ({children, ...props}) => {
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        app.auth().onAuthStateChanged(setCurrentUser)
        props.requestMenu()
    }, [props])

    if (currentUser) {
        props.setCurrentUser(currentUser)
        props.setIsAuth(true)
    }
    else {
        props.setCurrentUser(null)
        props.setIsAuth(false)
    }

    return (
        <AuthContext.Provider
            value={{currentUser}}
            >
            {children}
        </AuthContext.Provider>
    )
}

export default connect(null, {setCurrentUser, requestMenu, setIsAuth})(AuthProvider)