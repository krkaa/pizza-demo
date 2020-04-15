import React from 'react';

const MenuHead = ({displayName, currentUser}) => {

    return <div style={{marginTop: '10px'}}>
        {
            currentUser
                ? <p>{`Вы авторизованы как`} <b>{displayName}</b></p>
                : <p><b>{`Здарвствуйте, ${displayName}!`}</b></p>
        }
    </div>
}

export default MenuHead