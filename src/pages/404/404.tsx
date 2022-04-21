import React from 'react'
import { Link } from 'react-router-dom';
import "./404.scss";



const Error = () => {
    return (
        <>
            <h1 className='error_title'>404</h1>
            <p className="error_text">Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className='error_link'>Retourner sur la page d’accueil</Link>
        </>)
}

export default Error