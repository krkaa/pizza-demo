import React from 'react'
import { useHistory } from 'react-router-dom'
import {Result} from "antd";
import {Button} from "react-materialize";

export default () => {

    const history = useHistory()

    return <Result
        status="success"
        title="Successfully Purchased Cloud Server ECS!"
        subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
        extra={[
            <Button className={"orange"} type="primary" key="console" onClick={() => history.push('/')}>
                Go Home
            </Button>,
            <Button className={"red"} key="buy" onClick={() => history.push('/menu')}>Buy Again</Button>,
        ]}
    />
}