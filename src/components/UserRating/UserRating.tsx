import style from './UserRating.module.scss'

type Props = {
    rating: string
};


const UserRating = ({ rating }: Props) => {
    const arrayStar = [1, 2, 3, 4, 5]
    return (
        <div className={style.stars_block}>
            {arrayStar.map((n, index) => <i key={index} className={`fa-solid fa-star ${n <= Number(rating) ? style.colored : style.grey} ${style.star_i}`} ></i>)}
        </div>
    )
}



export default UserRating