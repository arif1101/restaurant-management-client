import React from 'react';
import Slider from '../../components/Slider';
import FavouriteFoods from '../../components/FavouriteFoods';
import OurApp from '../../components/OurApp';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <FavouriteFoods></FavouriteFoods>
            <OurApp></OurApp>
        </div>
    );
};

export default Home;