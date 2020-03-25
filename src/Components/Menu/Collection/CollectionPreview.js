import React from 'react'
import s from './CollectionPreview.module.sass'
import {addItem} from '../../../redux/cart-reducer'
import { connect } from 'react-redux'

const CollectionItem = ({ item, addItem}) => {
    const { name, price, imageUrl } = item

    const onClickEvent = () => {
        let q = 1
        addItem(item, q)
    }

    return (
        <div className={s.collectionItem}>
            <div
                className={s.image}
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className={s.collectionFooter}>
                <span className={name}>{name}</span>
                <span className={price}>{price}$</span>
            </div>
            <button onClick={onClickEvent}>Add to cart</button>
        </div>
    )
}


export default connect(null, {addItem})(CollectionItem)