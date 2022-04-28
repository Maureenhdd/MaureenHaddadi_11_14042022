import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import data from '../../data/data.json'



const Housing = () => {
    const id = useParams()
    console.log(id.id)
    const rental = data.find((item) => item.id === id.id);
    console.log(rental)
    return (
        <>
            <Header />
            <div className='main'>

                <h1>{rental?.title}</h1>
            </div></>
    )
}

export default Housing