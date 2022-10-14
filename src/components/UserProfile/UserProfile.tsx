import style from './UserProfile.module.scss'
type Props = {
    img: string
    name: string
};


const UserProfile = ({ img, name }: Props) => {
    return (
        <div className={style.user_block}>
            <p className={style.user_name}>
                {name}
            </p>
            <img src={img} alt={`profile picture of ${name}`} className={style.user_picture} />
        </div>
    )

}




export default UserProfile