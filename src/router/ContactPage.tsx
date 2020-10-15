import React from 'react';
import Hero from "../Components/Hero";
import Content from "../Components/Content";
import {Button, Form} from "react-bootstrap";
import Axios from "axios";

interface MyState {
    name: string;
    email: string;
    message: string;
    disabled: boolean;
    emailSend: boolean | null;
}

interface MyProps {
    title: string;
}

class ContactPage extends React.Component<MyProps, MyState> {

    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSend: null
        }
    }

    handleChange = (event: any) => {

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
                [name]: value
            } as Pick<MyState, keyof MyState>
        )
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        let that = this;

        Axios.post("http://localhost:8080/api/email", this.state).then(res => {
            if (res.data.success) {
                that.setState({disabled: false, emailSend: true, name: '', email: '', message:''})
            } else {
                this.setState({disabled: false, emailSend: false, name: '', email: '', message:''})
            }
        }).catch(e => {
            console.log(e);
        })

    }

    render() {
        return (
            <div>
                <Hero title={this.props.title}/>

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name}
                                          onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email}
                                          onChange={this.handleChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows={3}
                                          value={this.state.message} onChange={this.handleChange}/>
                        </Form.Group>

                        <Button className="d-inline-block" variant="outline-primary" type="submit"
                                disabled={this.state.disabled}>
                            Send
                        </Button>

                        {this.state.emailSend === true && <p className="d-inline success-msg">Email Send!</p>}
                        {this.state.emailSend === false && <p className="d-inline error-msg">Email Not Send!</p>}

                    </Form>
                </Content>
            </div>
        )
    }

}

export default ContactPage;
