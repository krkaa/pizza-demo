import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../Auth/Auth";

const MenuContent = () => {

    const {currentUser} = useContext(AuthContext)

    let [email, setEmail] = useState('Вы не авторизованы!')

    useEffect(() => {
        if(currentUser != null) {
            setEmail(currentUser.email)
        }
        else {
            setEmail('Вы не авторизованы!')
        }
    }, [currentUser])

    return (
        <div><p>{email}</p></div>
    )
}

export default MenuContent