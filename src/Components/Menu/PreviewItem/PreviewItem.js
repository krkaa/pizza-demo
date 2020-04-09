import React from 'react'
import CollectionPreview from '../Collection/CollectionPreview'
import {Collapsible, CollapsibleItem, Icon, Row} from "react-materialize";

const PreviewItem = ({title, items}) => {
    return <>
        <Collapsible accordion>
            <CollapsibleItem
                expanded={false}
                header={title}
                icon={<Icon>filter_drama</Icon>}
                node="div"
            >
                <Row>

                    {
                        items
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

                </Row>
            </CollapsibleItem>
        </Collapsible>
    </>
}


export default PreviewItem