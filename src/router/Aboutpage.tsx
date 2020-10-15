import React from 'react';
import Hero from "../Components/Hero";
import Content from '../Components/Content'

function AboutPage(props: any) {
    return (
        <div className="justify-content-center">
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Zeheng Lin, feel free to call me Matthew or matt.
                    I'm a Full stack engineer working on Sumer Inc. with experience on React/React Native,
                    Node.JS(Express, Apollo serve), Postgresql, MySQL, MongoDB, AWS, and data process and modeling skills such as using
                    Python, R, SAS, Machine Learning and Deep Learning (CNN, LSTM/RNN) to predict future result.
                </p>

                <p>I am an experienced full stack engineer with data mining and machine learning
                    background from University of Toronto Scarborough with proven Full stack development
                    skills as well as AWS and GCP cloud computing and database manipulation.
                    Passionate developer whose always willing to learn from work and teams to create
                    new solution.</p>

                <p>My recent project is to build a cross platform mobile application for the company
                    which allow client to fetch the closest grocery store and shop online
                    and enjoy the free delivery services. The app was already on both platform and feel free
                    to try it and enjoy the free delivery services.
                    (For IOS devices download <a href="https://apps.apple.com/cn/app/sumer/id1513840235">here</a>,
                    for android devices download <a href="https://play.google.com/store/apps/details?id=com.sumer.sumer">here</a>).
                </p>

                <p>I love learning new thing relative to technology, and I am constantly learning for the
                    newest technique online to make sure I am always perpare for the next challenge</p>

                <p>Other than that, I love playing basketball with my friend and cooking different style of food.
                    And I love to share what is nice to me to others since I believe that it would make a better
                    relationship.</p>

            </Content>
        </div>
    )
}

export default AboutPage;
