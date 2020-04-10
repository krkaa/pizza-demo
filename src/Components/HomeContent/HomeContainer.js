import React from 'react';
import {connect} from "react-redux";
import HomeContent from "./HomeContent";
import {setUserAddress} from "../../redux/menu-reducer";
import {reset} from 'redux-form'

const HomeContainer = ({setUserAddress, reset, history}) => {

    const onSubmitAdress = (formData) => {
        setUserAddress(formData.orderAdress)
        reset('order')
        history.push('/menu')
    }

    return (
        <HomeContent onSubmit={onSubmitAdress}/>
    )
}

export default connect(null, {setUserAddress, reset})(HomeContainer)