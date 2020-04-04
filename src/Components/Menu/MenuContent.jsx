import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../Auth/Auth";
import {connect} from "react-redux";
import PreviewItem from "./PreviewItem/PreviewItem";
import MenuHead from "./MenuHead";

const MenuContent = ({menuData, quantityItems}) => {

    const {currentUser} = useContext(AuthContext)

    let [displayName, setDisplayName] = useState('Гость')

    useEffect(() => {
        if (currentUser != null) {
            setDisplayName(currentUser.displayName)
        } else {
            setDisplayName('Гость')
        }
    }, [currentUser])

    return <>
        <MenuHead displayName={displayName} currentUser={currentUser} quantityItems={quantityItems}/>
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
    menuData: state.menu.menuData,
    quantityItems: state.cart.quantityItems
})

export default connect(mapStateToProps, {})(MenuContent)