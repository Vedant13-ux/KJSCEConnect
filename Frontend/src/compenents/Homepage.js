import React from 'react';
// import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import InternshipList from '../containers/Homepage/IntershipList';
import Navbar from '../containers/Global/Navbar'
import PageFooter from '../containers/Global/PageFooter'
import { InternshipCreate } from '../containers/Global/Utilities'
import { MyProvider } from '../services/Provider'


const Homepage = () => {
    return (
        <div className='homePage'>
            <div className="carousel-home">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://www.eurashe.eu/wp-content/uploads/2018/08/Visual.png"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://lms-kjsce.somaiya.edu/pluginfile.php/1/theme_essential/slide2image/1604898978/eng_banner_2%20%282%29.jpg"
                            alt="Second slide"
                        />

                        {/* <Carousel.Caption>
                            <h3>Second slide</h3>
                            <p>second sub title</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src="https://lms-kjsce.somaiya.edu/pluginfile.php/1/theme_essential/slide4image/1604898978/Principal%20Mam.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <MyProvider>
                <Navbar></Navbar>
                <InternshipList />
            </MyProvider>
            <InternshipCreate />
            <PageFooter />

        </div>
    );
}


export default Homepage;