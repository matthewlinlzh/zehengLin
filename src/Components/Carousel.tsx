import React from "react";
import Card from "./Card";
import {Container, Row} from "react-bootstrap";

import Avatar from '../Assets/image/avatar.png';
import GitHub from "../Assets/image/github.png";

interface MyState {
    items: {
        id: number,
        title: string,
        subtitle: string,
        imageSrc: string,
        link: string,
        selected: boolean,
    }[]
}

class Carousel extends React.Component<{}, MyState> {

    constructor(props: any) {
        super(props)
        this.state = {
            items: [
                {
                    id: 0,
                    title: "My Project",
                    subtitle: "GitHub project",
                    imageSrc: GitHub,
                    link: "https://github.com/matthewlinlzh",
                    selected: false
                },
                {
                    id: 1,
                    title: "LinkedIn",
                    subtitle: "LinkedIn Profile",
                    imageSrc: Avatar,
                    link: "https://www.linkedin.com/in/zeheng-lin-23114b149/",
                    selected: false
                },
                {
                    id: 2,
                    title: "LinkedIn",
                    subtitle: "LinkedIn Profile",
                    imageSrc: Avatar,
                    link: "https://www.linkedin.com/in/zeheng-lin-23114b149/",
                    selected: false
                }
            ]
        }
    }

    handleCardSelect = (id: number, card: any) => {
        console.log(id)
        const items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false
            }
        })

        this.setState({items: items})
    }

    makeItems = (items: any) => {
        return items.map((item: any) => {
            return <Card item={item} click={((e:any) =>  this.handleCardSelect(item.id, e))} key={item.id} />
        })
    }

    render() {
        return (
            <Container fluid>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}


export default Carousel;
