import React from "react";
import CardInfo from "./CardInfo";

interface props {
    item: {
        id: number,
        title: string,
        subtitle: string,
        imageSrc: string,
        link: string,
        selected: boolean
    },
    click: any,
    key: number
}

function Card(props: props) {

    return (
        <div className="d-inline-block zl-card" onClick={(e:any) => props.click(props.item)}>
            <img className="zl-card-image" src={props.item.imageSrc} alt="props.items.imageSrc"/>
            { props.item.selected && <CardInfo title={props.item.title} subtitle={props.item.subtitle} link={props.item.link} /> }
        </div>
    )
}

export default Card;
