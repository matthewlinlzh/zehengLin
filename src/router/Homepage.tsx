import React from 'react';
import Hero from "../Components/Hero";
import Carousel from "../Components/Carousel";

function Homepage(props: any) {
    return (
        <div>
            <Hero title={props.title} subtitle={props.subtitle} />
            <Carousel />
        </div>
    )
}

export default Homepage;
