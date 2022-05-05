import React, { useState } from 'react'
import style from './UserRating.module.scss'
type Props = {
    rating: any
};


const UserRating = ({ rating }: Props) => {
    const arrayStar = [1, 2, 3, 4, 5]
    return (
        <div className={style.stars_block}>

        {arrayStar.map(n => <i className={`fa-solid fa-star ${n <= rating ? style.colored : style.grey} ${style.star_i}`} ></i>)}


        </div>
    )
}



export default UserRating