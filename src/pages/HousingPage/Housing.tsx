import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import data from '../../data/data.json'
import "./../../assets/scss/main.scss";
import Carousel from '../../components/Carousel/Carousel'
import './Housing.scss'
import Accordion from '../../components/Accordion/Accordion'
import Footer from '../../components/Footer/Footer';
import Tag from '../../components/Tag/Tag'
import UserRating from '../../components/UserRating/UserRating';
import UserProfile from '../../components/UserProfile/UserProfile';

const Housing = () => {
    const id = useParams()
    const rental = data.find((item) => item.id === id.id);
    const pictures: any = rental?.pictures

    return (
        <>
            <Header />
            <div className='main'>
                <Carousel arrayPicture={pictures} />
                <div className="housing_top">
                    <div className="housing_top_left">
                        <h1 className='housing_title'>{rental?.title}</h1>
                        <p className='housing_location'>{rental?.location}</p>
                        <div className="housing_tag_block">
                            {rental!.tags.map((tag, index) => <Tag text={tag} key={index} />)}
                        </div>
                    </div>

                    <div className="housing_top_right">
                        <UserProfile name={rental!.host.name} img={rental!.host.picture} />
                        <UserRating rating={rental!.rating} />
                    </div>

                </div>


                <div className="accordion_block">
                    <div>
                        <Accordion title='Description' text={rental!.description} />
                    </div>
                    <div>
                        <Accordion title='Equipements' text={rental!.equipments.map((e, index) => <li key={index} >{e}</li>)} />
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Housing