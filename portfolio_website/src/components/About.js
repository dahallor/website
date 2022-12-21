import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container'
import '../styles/about.css'

function About() {
    const openBracket = "["
    const closedBracket = "]"
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img src='./images/background.jpg' />
                <Carousel.Caption className='slideOne'>
                    <h2 className='slideOne'>My Story</h2>
                    <p className='slideOne'>Hello! My name is David A. Halloran. In Northeast Philadelphia born & raised, on the Xbox is where I spent most of my days. And way back when, my life was a little different.</p>
                    <p className='slideOne'>Long ago: in the far, far past of 2015, I graduated with my Bachelor's in Financial Economics from Millersville University</p>
                    <p className='slideOne'>After job hoping around trying to find *where* to plant myself in the finance field, I ended up as an accountant. It was......</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='./images/background2.jpg' />
                <Carousel.Caption className='slideTwo'>
                    <h2 className='slideTwo'>Early Career</h2>
                    <p className='slideTwo'>...ok. It was just ok. I coasted by my mid-twenties.</p>
                    <p className='slideTwo'>The thing about accounting, is that it's very dull. You do the same exact thing everyday. Deviation & creative thinking is almost discouraged</p>
                    <p className='slideTwo'>The main impediment to being a great accountant for me was honestly the sheer bordem. But I kept moving up because I outshined other accountants in a certain area: Excel</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='./images/background3.jpg' />
                <Carousel.Caption className='slideThree'>
                    <h2 className='slideThree'>Early Career Cont.</h2>
                    <p className='slideThree'>I was essentially the pseudo tech guy everywhere I worked. And I leaned into that hard</p>
                    <p className='slideThree'>I ended up actually automating much of my own job using just excel formulas. Knocking 3 hour long tasks down to 20 minutes</p>
                    <p className='slideThree'>It felt great being able to solve what my mind considered a big puzzle, but then this left me with dread....it was dawning on me the only reason I had a career is because elderly management has no idea what computers can do</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='./images/background4.jpg' />
                <Carousel.Caption className='slideFour'>
                    <h2 className='slideFour'>Existential Dread. {openBracket}pt 1 of &infin;{closedBracket}</h2>
                    <p className='slideFour'>How am I supposed to stretch this out another 40 years?</p>
                    <p className='slideFour'>Should I change careers to something more challenging? Maybe if I find a field that lets me apply myself I'd have less of an automation risk?</p>
                    <p className='slideFour'>How would I even go about this?</p>
                    <p className='slideFour'>'Go back to school and give up 2 years of my life?' I thought to myself, having this crisis around December 2019.</p>
                    <p className='slideFour'>But wouldn't you know, the craaaaziest thing happened soon after...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='./images/background5.jpg' />
                <Carousel.Caption className='slideFive'>
                    <h2 className='slideFive'>Government Say to Give Up Two Years Of Your Life</h2>
                    <p className='slideFive'>2020 rolls around, and it's a horror with no end in sight. I marathon science podcasts, they say best case scenario is this new mRNA technique could produce a vaccine in about 18 months</p>
                    <p className='slideFive'>So now locked inside for the foreseeable future, suddenly quitting a job where I was an 'essential worker' to train for a new one didn't seem so bad</p>
                    <p className='slideFive'>I started at Drexel University in 2020.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='./images/background6.jpg' />
                <Carousel.Caption className='slideSix'>
                    <h2 className='slideSix'>Grad School</h2>
                    <p className='slideSix'>I got warned the program is intense, especially for someone without a CS undergrad</p>
                    <p className='slideSix'>Admissions dragged their feet at first but then I said the magic words:</p>
                    <p className='slideSix'>'Pweeease let me give you $70,000 for a piece of paper. Pretty Pweeeease....'</p>
                    <p className='slideSix'>And eventually they go "Aw alright, how can we say no to that?"</p>
                    <p className='slideSix'>I take all the intro classes in a pre-masters program and pass them all, so I am able to roll right into the Master's program</p>
                    <p className='slideSix'>After a two year slog of non-stop 70-80 hour weeks, I graduated Drexel in 2022.</p>
                    <p className='slideSix'>Sometimes I had to work 3x as hard to make it half as far as other people with CS backgrounds, but I did it. And even outpaced some people with CS backgrounds</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src='./images/background7.jpg' />
                <Carousel.Caption className='slideSeven'>
                    <h2 className='slideSeven'>Present Day</h2>
                    <p className='slideSeven'>All of that brings us here, and a tally of things gained and lost the past 2 years:</p>
                    <p className='slideSeven'>-70,000 USD</p>
                    <p className='slideSeven'>+1 big piece of paper on my wall</p>
                    <p className='slideSeven'>+1 ADHD diagnoisis</p>
                    <p className='slideSeven'>-2 'Situationships'</p>
                    <p className='slideSeven'>+20 LDL cholesterol mg/dL</p>
                    <p className='slideSeven'>+1 Career*</p>
                    <p className='slideSeven'>*Denotes speculation. You can help make this reality by hiring me</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
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