import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../Auth/Auth";
import {connect} from "react-redux";
import MenuHead from "./MenuHead";
import {Layout, Menu, Row} from "antd";
import {PieChartOutlined} from '@ant-design/icons'
import CollectionPreview from "./Collection/CollectionPreview";
import s from "./MenuContent.module.sass"

const {Content, Sider} = Layout;

const MenuContent = ({menuData, quantityItems}) => {

    const {currentUser} = useContext(AuthContext)

    const [displayName, setDisplayName] = useState('Гость')
    const [contentId, setContentId] = useState(menuData[0].id)

    useEffect(() => {
        if (currentUser != null) {
            setDisplayName(currentUser.displayName)
        } else {
            setDisplayName('Гость')
        }
    }, [currentUser])


    return <>
        <MenuHead displayName={displayName} currentUser={currentUser} quantityItems={quantityItems}/>
        <Layout className="site-layout-background" style={{padding: '24px 0', backgroundColor: '#fff'}}>
            <Sider className={`site-layout-background ${s.sider}`} width={150}>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="light"
                >
                    {
                        menuData.map(item => (
                            <Menu.Item key={item.id} onClick={() => setContentId(item.id)}>
                                <PieChartOutlined style={{marginRight: 10}}/>
                                <span>{item.title}</span>
                            </Menu.Item>
                        ))
                    }
                </Menu>
            </Sider>
            <Content style={{padding: '0 24px'}}>
                <Row gutter={{xs: 8, sm: 16, md: 24, lg: 32}}>
                        {
                            menuData.map(item => {
                                if (item.id === contentId) {
                                    return item.items
                                        .map((item) => (
                                            <CollectionPreview
                                                key={item.id}
                                                name={item.name}
                                                imageUrl={item.imageUrl}
                                                price={item.price}
                                                item={item}
                                            />
                                        ))
                                }
                                return undefined
                            })
                        }
                </Row>
            </Content>
        </Layout>
    </>
}

let mapStateToProps = state => ({
    menuData: state.menu.menuData,
    quantityItems: state.cart.quantityItems
})

export default connect(mapStateToProps, {})(MenuContent)