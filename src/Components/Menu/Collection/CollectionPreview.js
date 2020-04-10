import React, {useEffect, useState} from 'react'
import s from './CollectionPreview.module.sass'
import {addItem} from '../../../redux/cart-reducer'
import {connect} from 'react-redux'
import {Button} from "react-materialize";
import {Card, Col} from "antd";
import { message } from 'antd';
import {compose} from "redux";
import {withWindowSizeListener} from "react-window-size-listener";

const { Meta } = Card

const CollectionItem = ({item, addItem, windowSize}) => {
    const {name, price, imageUrl} = item
    const {windowWidth, windowHeight} = windowSize

    const [spanRow, setSpanRow] = useState(8)
    const [cardWidth, setCardWidth] = useState(200)
    const [imgHeight, setImgHeight] = useState(200)

    const onClickEvent = () => {
        let q = 1
        addItem(item, q)
        message.success('Product add to cart!');
    }

    useEffect(() => {
        if (windowWidth < 600) {
            setSpanRow(24)
            setCardWidth(155)
            setImgHeight(155)
        }
        else if (windowWidth > 600 && windowWidth < 768) {
            setSpanRow(12)
            setCardWidth(155)
            setImgHeight(155)
        }
        else if (windowWidth > 768 && windowWidth < 992) {
            setSpanRow(8)
            setCardWidth(155)
            setImgHeight(155)
        }
        else if (windowWidth > 992 && windowWidth < 1200) {
            setSpanRow(8)
            setCardWidth(200)
            setImgHeight(200)
        }
        else if (windowWidth > 1200 && windowWidth < 1449) {
            setSpanRow(6)
            setCardWidth(200)
            setImgHeight(200)
        }
        else if (windowWidth > 1449 && windowWidth < 1920) {
            setSpanRow(6)
            setCardWidth(260)
            setImgHeight(260)
        }
        else if (windowWidth > 1920) {
            setSpanRow(6)
            setCardWidth(350)
            setImgHeight(350)
        }
    }, [windowWidth])

    return (

        <Col className="gutter-row" span={spanRow} style={{margin: 'auto 0'}}>
            <Card
                className={s.card}
                style={{ width: cardWidth }}
                cover={
                    <img
                        style={{height: `${imgHeight}px`}}
                        alt={name}
                        src={imageUrl}
                    />
                }
                actions={[
                    <Button
                        node="button"
                        style={{
                            marginRight: '5px',
                            backgroundColor: '#FF9800'
                        }}
                        waves="light"
                        onClick={onClickEvent}
                        key={item.id}
                    >
                        Add to cart
                    </Button>
                ]}
            >
                <Meta
                    title={name}
                    description={`${price}$`}
                />
            </Card>
        </Col>
    )
}


export default compose(
    withWindowSizeListener,
    connect(null, {addItem})
)(CollectionItem)