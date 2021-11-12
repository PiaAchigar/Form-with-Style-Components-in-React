import React from 'react'

const ProfilePreviewComponent = () => {

    const Perfil = {
        nombre: 'Daniel',
        apellido: 'Acuna',
        logo: 'https://picsum.photos/200/100',
        proyecto: 'La locura',        

    }
    
    return (
        <div>
            <h2>Mi perfil</h2>
            <h3>{Perfil.nombre} {Perfil.apellido}</h3>
            <div><img alt="logo" src={Perfil.logo}></img></div>
            <p>{Perfil.proyecto}</p>
            <button>
                <p>Editar</p>
            </button>
        </div>
    )
}

export default ProfilePreviewComponent
