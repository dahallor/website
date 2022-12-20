import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'

function About() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container className="slideshow">
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default About



// function About() {
//     return (
//         <div>
//             <p>Hello! My name is David Halloran. In 2015 I graduated from Millersville University with my bacholer's in Financial Economics.
//                 And from there I fell into accounting and worked as an accountant for 5 years. It was.....ok, let's say.
//                 And for a while I was content with that, I figured there wasn't really going to be any opportunity for a career change.
//             </p>
//             <p>But then in 2020, the *craziest thing* happened. So during quarentine I decided now was the best time for a change and started my Master's program at Drexel University.
//                 Now with the degree completed I'm looking to go out into the world.
//             </p>
//         </div>
//     );
// }

// export default About