import React from 'react'
import s from './Cart.module.sass'
import {Button} from "react-materialize";
import {reduxForm} from "redux-form";
import {createField, Input as CustomInput} from "../../common/FormControls/FormControls";
import {required} from "../../Controls/Validators/Validators";


export default reduxForm({form: 'orderContacts'})(({handleSubmit, userAddress}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('','text','userAddress',CustomInput,[required],'addressOrder',null, 'Your address', userAddress)}
            {createField('','tel','userPhone',CustomInput,[required],'phoneOrder',null, 'Your phone')}
            <Button className={`red ${s.button}`} style={{marginBottom: '20px'}}>Order</Button>
        </form>
    )
})