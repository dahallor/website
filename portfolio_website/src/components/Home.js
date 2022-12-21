import '../styles/home.css'
import { useEffect, useState } from 'react'
import { Container, Button } from 'react-bootstrap'


const Home = () => {
    const oneOne = "Hi,"
    const oneTwo = "I'm Dave"
    const two = "I have a Master's in Computer Science"
    const threeOne = "I like to code websites,"
    const threeTwo = "apps,"
    const threeThree = "& programs"
    const [textOneOne, setTextOneOne] = useState(null)
    const [textOneTwo, setTextOneTwo] = useState(null)
    const [textTwo, setTextTwo] = useState(null)
    const [textThreeOne, setTextThreeOne] = useState(null)
    const [textThreeTwo, setTextThreeTwo] = useState(null)
    const [textThreeThree, setTextThreeThree] = useState(null)
    const [shortPauseOne, setShortPauseOne] = useState(null)
    const [longPauseOne, setLongPauseOne] = useState(null)
    const [longPauseTwo, setLongPauseTwo] = useState(null)
    const [shortPauseThreeOne, setShortPauseThreeOne] = useState(null)
    const [shortPauseThreeTwo, setShortPauseThreeTwo] = useState(null)
    const [begin, setBegin] = useState(null)
    const [end, setEnd] = useState(null)

    async function typing(textToAdd, setText, timeElapsed) {
        const typeInterval = 25
        for (let i = 0; i < textToAdd.length; i++) {
            setTimeout(async () => {
                if (i == 0) {
                    setText(textToAdd[i] + "_")
                } if (i > 0 && i < textToAdd.length) {
                    setText(prevText => prevText.slice(0, -1))
                    setText(prevText => prevText + textToAdd[i])
                    setText(prevText => prevText + "_")
                } if (i == textToAdd.length - 1) {
                    setText(prevText => prevText.slice(0, -1))
                }
            }, timeElapsed + typeInterval)
            timeElapsed += typeInterval
        }

        return timeElapsed
    }

    async function pause(setText, timeElapsed, type) {
        const comaInterval = 600
        const pauseInterval = 2000
        if (type === 'coma') {
            setTimeout(async () => {
                setText("_")
            }, timeElapsed)
            setTimeout(async () => {
                setText(" ")
            }, timeElapsed + comaInterval)
            timeElapsed += comaInterval
        } else {
            setTimeout(async () => {
                setText("_")
            }, timeElapsed)
            setTimeout(async () => {
                setText(" ")
            }, timeElapsed + pauseInterval)
            timeElapsed += pauseInterval
        }
        return timeElapsed
    }

    async function endAnimation(setText, timeElapsed) {
        setTimeout(async () => {
            setText("_")
        }, timeElapsed)
        setTimeout(async () => {
            document.getElementById("continue-button").style.opacity = 1;
        }, timeElapsed + 2000)
    }


    async function run() {
        let timeElapsed = await pause(setBegin, 0, "short")
        timeElapsed = await typing(oneOne, setTextOneOne, timeElapsed)
        timeElapsed = await pause(setShortPauseOne, timeElapsed, "coma")
        timeElapsed = await typing(oneTwo, setTextOneTwo, timeElapsed)
        timeElapsed = await pause(setLongPauseOne, timeElapsed, "long")
        timeElapsed = await typing(two, setTextTwo, timeElapsed)
        timeElapsed = await pause(setLongPauseTwo, timeElapsed, "long")
        timeElapsed = await typing(threeOne, setTextThreeOne, timeElapsed)
        timeElapsed = await pause(setShortPauseThreeOne, timeElapsed, "coma")
        timeElapsed = await typing(threeTwo, setTextThreeTwo, timeElapsed)
        timeElapsed = await pause(setShortPauseThreeTwo, timeElapsed, "coma")
        timeElapsed = await typing(threeThree, setTextThreeThree, timeElapsed)
        await endAnimation(setEnd, timeElapsed)
        //console.log(timeElapsed)
    }

    useEffect(() => {
        run()
    }, [])

    return (
        <>
            <Container className='homeContainer'>
                <div className='line1'>
                    <span>
                        <h1 className='begin-point' id='begin'>{begin}</h1>
                        <h1 className='one-one'>{textOneOne}</h1>
                        <h1 className='short-pause' id='short-pause-one'>{shortPauseOne}</h1>
                        <h1 className='one-two'>{textOneTwo}</h1>
                        <h1 className='long-pause'>{longPauseOne}</h1>
                    </span>
                </div>
                <div className='line2'>
                    <h1 className='two'>{textTwo}</h1>
                    <h1 className='long-pause'>{longPauseTwo}</h1>
                </div>
                <div className='line3'>
                    <h1 className='three-one'>{textThreeOne}</h1>
                    <h1 className='short-pause'>{shortPauseThreeOne}</h1>
                    <h1 className='three-two'>{textThreeTwo}</h1>
                    <h1 className='short-pause'>{shortPauseThreeTwo}</h1>
                    <h1 className='three-three'>{textThreeThree}</h1>
                    <h1 className='end-point'>{end}</h1>
                </div>
                <a href='/portfolio'>
                    <button className='button' id='continue-button' href="/portfolio">Come See My Work</button>
                </a>
            </Container>

        </>
    );
}


export default Home