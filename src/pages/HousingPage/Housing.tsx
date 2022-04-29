import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import data from '../../data/data.json'
import "./../../assets/scss/main.scss";



const Housing = () => {
    const id = useParams()
    console.log(id.id)
    const rental = data.find((item) => item.id === id.id);
    const pictures = rental?.pictures
    console.log(pictures)
    const [shift , setShift] = useState(0)
    return (
        <>
            <Header />
            <div className='main'>

                <div className="carousel">
                <div className='btn'>
                <button onClick={() => setShift(shift === 0 ? (pictures!.length * -1) + 1 : shift+1)}>Previous</button>
                <button onClick={() => setShift(shift-1)}>Next</button>

                </div>
                {pictures?.map((img, index) => <img src={img} alt="img" style={{transform : `translateX(${shift * 100}%)`}}/>
                )}
               
                </div>
              
                <h1>{rental?.title}</h1>
            </div></>
    )
}

export default Housing