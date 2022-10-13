import {
    Routes,
    Route,
} from "react-router-dom";
import Home from './pages/HomePage/Home';
import Housing from './pages/HousingPage/Housing';
import About from './pages/AboutPage/About';
import Error from './pages/404/404';


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}


export default Router