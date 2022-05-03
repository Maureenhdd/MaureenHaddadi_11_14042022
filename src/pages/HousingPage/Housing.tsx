import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import data from '../../data/data.json'
import "./../../assets/scss/main.scss";
import Carousel from '../../components/Carousel/Carousel'
import './Housing.scss'
import Accordion from '../../components/Accordion/Accordion'


const Housing = () => {
    const id = useParams()
    console.log(id.id)
    const rental = data.find((item) => item.id === id.id);
    const pictures: any = rental?.pictures

    return (
        <>
            <Header />
            <div className='main'>
                <Carousel arrayPicture={pictures} />
                <h1 className='housing_title'>{rental?.title}</h1>
                <p>{rental?.location}</p>
                <div className="accordion_block">
                <Accordion title='Description' text={rental!.description} />
                <Accordion title='Equipements' text={rental!.description} />
                </div>
           
            </div></>
    )
}

export default Housing