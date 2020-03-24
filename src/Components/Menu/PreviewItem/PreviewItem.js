import React from 'react'
import s from './PreviewItem.module.sass'
import CollectionPreview from '../Collection/CollectionPreview'

const PreviewItem = ({ title, items }) => {

    return <div className={s.previewItem}>
        <h1 className={s.title}>{title.toUpperCase()}</h1>
        <div className={s.preview}>
            {
                items
                    .filter((item, idx) => idx < 4)
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
        </div>
    </div>
}



export default PreviewItem