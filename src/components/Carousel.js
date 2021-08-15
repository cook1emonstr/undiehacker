import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import jessica1 from '../static/images/Inkedjessica-biel_LI.jpg';
import jessica2 from '../static/images/Inkedjessica-biel-justin-timberlake_LI.jpg';
import jessica3 from '../static/images/bieltcmmontyfb.jpg';
import jessica4 from '../static/images/Inkedjustin-timberlake-jessica-biel-1_LI.jpg';
import jessica5 from '../static/images/jessica-couch.jfif';
import jessica6 from '../static/images/190615-jessica-biel-al-1016.jpg';


export default () => (
    <Carousel autoPlay showArrows={true} showThumbs={false} stopOnHover={true} dynamicHeight={false}>
        <div>
            <img alt="" src={jessica3} />
        </div>
        <div>
            <img alt="" src={jessica5} />
        </div>
        <div>
            <img alt="" src={jessica6} />
        </div>
        <div>
            <img alt="" src={jessica1} />
        </div>
        <div>
            <img alt="" src={jessica2} />
        </div>
        <div>
            <img alt="" src={jessica4} />
        </div>
    </Carousel>
);
