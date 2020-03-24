import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../Auth/Auth";
import {connect} from "react-redux";
import {requestMenu} from "../../redux/menu-reducer";
import PreviewItem from "./PreviewItem/PreviewItem";

const MenuContent = ({menuData}) => {

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

    console.log(menuData.map(item => item))

    return <>
            {
                menuData.map(item => (
                    <PreviewItem
                        key={item.id}
                        title={item.title}
                        routeName={item.routeName}
                        items={item.items}
                    />
                ))
            }
        </>
}

let mapStateToProps = state => ({
    menuData: state.menu.menuData
})

export default connect(mapStateToProps, {})(MenuContent)