import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Image from '../img/foodimage.jpg';
import Image2 from '../img/mexicanfood4.jpg';
import Image3 from '../img/mexicanfood3.jpg';

const sizeStyle = {
    width: "100%",
    height: "auto"
    
};

const CarouselComponent =  () => (
        <Carousel style={sizeStyle}>
            <Carousel.Item>
                <img style={sizeStyle}
                className="d-block w-100"
                src={Image}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={sizeStyle}
                className="d-block w-100"
                src={Image2}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={sizeStyle}
                className="d-block w-100"
                src={Image3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
);

export default CarouselComponent;