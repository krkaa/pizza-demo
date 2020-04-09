import React from 'react';

const MenuHead = ({displayName, currentUser}) => {

    return <>
        {
            currentUser
                ? <p>{`Вы авторизованы как`} <b>{displayName}</b></p>
                : <p><b>{`Здарвствуйте, ${displayName}!`}</b></p>
        }
    </>
}

export default MenuHead