import React from 'react';

const MenuHead = ({displayName, currentUser}) => {

    return <>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    {
                        currentUser
                            ? <p>{`Вы авторизованы как`} <b>{displayName}</b></p>
                            : <p><b>{`Здарвствуйте, ${displayName}!`}</b></p>
                    }
                </div>
            </div>
        </div>
    </>
}

export default MenuHead