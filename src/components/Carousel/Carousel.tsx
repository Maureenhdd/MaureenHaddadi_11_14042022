import React, { useState } from 'react'
import style from './Carousel.module.scss'
type Props = {
    arrayPicture: string[]
};


const Carousel = ({ arrayPicture }: Props) => {
    const [shift, setShift] = useState(0)
    console.log(shift)
    return (
        <div className={style.carousel}>
            <div className={style.carousel_btn_block}>
                <button className={style.carousel_btn} onClick={() => setShift(shift === 0 ? (arrayPicture!.length * -1) + 1 : shift + 1)}><i className={`fa-solid fa-chevron-left ${style.carousel_i}`}></i></button>
                <button className={style.carousel_btn} onClick={() => setShift(shift === (arrayPicture!.length * -1) + 1 ? 0 : shift - 1)}><i className={`fa-solid fa-chevron-right ${style.carousel_i}`}></i></button>

            </div>
            {arrayPicture.map((img, index) => <img src={img} alt="img" className={style.carousel_img} style={{ transform: `translateX(${shift * 100}%)` }} key={index} />
            )}

        </div>
    )
}


export default Carousel