import React from 'react'

const ProfilePreviewComponent = (props) => {
    
    return (
        <div>
            <h2>Mi perfil</h2>
            <h3> {props.nombre} {props.apellido}</h3>
            <div><img alt="logo" src={props.profilePic}></img></div>
            <p>{props.proyecto}</p>
            <button>
                <p>Editar</p>
            </button>
        </div>
    )
}

export default ProfilePreviewComponent
