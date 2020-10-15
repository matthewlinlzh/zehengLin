import React from "react";
import {useSpring, animated} from "react-spring";


interface props {
    title: string;
    subtitle: string;
    link: string;
}

function CardInfo(props: props)  {

    const style =useSpring({opacity: 1, from:{opacity:0}})

    return (
        <animated.div className="zl-card-info" style={style}>
            <p className="zl-card-title">{props.title}</p>
            <p className="zl-card-subtitle">{props.subtitle}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" >View</a>
        </animated.div>
    )
}

export default CardInfo;
