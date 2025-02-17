import React from 'react';
import Slider from '../../components/Slider';
import FavouriteFoods from '../../components/FavouriteFoods';
import OurApp from '../../components/OurApp';
import Experiense from '../../components/Experiense';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <FavouriteFoods></FavouriteFoods>
            <Experiense></Experiense>
            <OurApp></OurApp>
        </div>
    );
};

export default Home;