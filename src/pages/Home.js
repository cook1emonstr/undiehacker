import React from "react";
import Carousel from '../components/Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Home = () => (
    <div className='home'>
        <h1>A<strike>n</strike> <strike>Eve Jobs</strike> Jessica Biel Fansite</h1>
        <h3>And Haven for poetry enthusiasts</h3>
        <div>
            <Carousel />
        </div>
    </div>
);

export default Home;