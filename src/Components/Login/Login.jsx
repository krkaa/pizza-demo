import React from 'react'
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import styles from "./Login.module.sass"
import {Tabs} from "antd";

const { TabPane } = Tabs;

const Login = (props) => {
    return (
        <div className={`card-container ${styles.container}`}>
            <Tabs type="card" center>
                <TabPane tab="Sign In" key="1">
                    <SignIn/>
                </TabPane>
                <TabPane tab="Sign Up" key="2">
                    <SignUp/>
                </TabPane>
            </Tabs>
        </div>
    )
}

export default Login