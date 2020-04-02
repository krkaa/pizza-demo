import React from 'react';
import {connect} from "react-redux";
import HomeContent from "./HomeContent";
import {setUserAdress} from "../../redux/menu-reducer";
import {reset} from 'redux-form'

const HomeContainer = ({setUserAdress, reset, history}) => {

    const onSubmitAdress = (formData) => {
        setUserAdress(formData.orderAdress)
        reset('order')
        history.push('/menu')
    }

    return (
        <HomeContent onSubmit={onSubmitAdress}/>
    )
}

export default connect(null, {setUserAdress, reset})(HomeContainer)