import React from 'react';

const MenuHead = ({email, currentUser}) => {

    return <>
        <div className="container">
            <div className="row">
                <div className="col-6">
                    {
                        currentUser
                            ? <p><b>{`Вы авторизованы как ${email}`}</b></p>
                            : <p><b>{`Здарвствуйте, ${email}!`}</b></p>
                    }
                </div>
            </div>
        </div>
    </>
}

export default MenuHead