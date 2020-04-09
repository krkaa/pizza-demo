import React from 'react'
import s from './CollectionPreview.module.sass'
import {addItem} from '../../../redux/cart-reducer'
import {connect} from 'react-redux'
import {Button, Card, CardTitle, Col, Icon} from "react-materialize";

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item

    const onClickEvent = () => {
        let q = 1
        addItem(item, q)
    }

    return (
        <Col
            m={4}
            s={12}
        >
            <Card
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
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={imageUrl}/>}
                revealIcon={<Icon>more_vert</Icon>}
            >
                <div className={s.collectionFooter}>
                    <span className={name}>{name}</span>
                    <span className={price}>{price}$</span>
                </div>
            </Card>
        </Col>
    )
}


export default connect(null, {addItem})(CollectionItem)