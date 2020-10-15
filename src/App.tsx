import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Container, Navbar, Nav} from "react-bootstrap";
import './App.css';

import Footer from './Components/Footer';
import Home from './router/Homepage'
import About from "./router/Aboutpage";
import Portfolio from "./router/PortfolioPage";
import Contact from "./router/ContactPage";


type MyState = {
    title: string,
    headerLink: { title: string, path: string }[],
    home: {title: string, subtitle: string},
    about: {title: string},
    portfolio: {title: string},
    contact: {title: string},
}

class App extends React.Component<{}, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            title: "Zeheng Lin",
            headerLink: [
                {title: "Home", path: "/"},
                {title: "About", path: "/about"},
                {title: "Portfolio", path: "/portfolio"},
                {title: "Contact", path: "/contact"}
            ],
            home: {
                title: "Technology is the key to future",
                subtitle: "The Start of my Journey"
            },
            about: {
                title: "A Little Bit of me"
            },
            portfolio: {
                title: "Experiences"
            },
            contact: {
                title: "Contact Me!!"
            }
        }
    }

    render() {
        return (
            <Router>
                <Container fluid className="p-0">
                    <Navbar className="border-bottom" bg="transparent" expand="lg">
                        <Navbar.Brand>Zeheng Lin</Navbar.Brand>

                        <Navbar.Toggle aria-controls="navbar-toggle" className="border-0"/>
                        <Navbar.Collapse id="navbar-toggle">
                            <Nav className="ml-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/about">About</Link>
                                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Route path="/" exact render={() => <Home title={this.state.home.title} subtitle={this.state.home.subtitle} />} />
                    <Route path="/about" exact render={() => <About title={this.state.about.title} />} />
                    <Route path="/portfolio" exact render={() => <Portfolio title={this.state.portfolio.title} />} />
                    <Route path="/contact" exact render={() => <Contact title={this.state.contact.title} />} />


                    <Footer />
                </Container>
            </Router>
        );
    }

}

export default App;
