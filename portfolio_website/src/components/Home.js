import '../styles/home.css'
import { useState, useEffect } from 'react'


const Home = () => {
    const [textOne, setTextOne] = useState("")
    const [textTwo, setTextTwo] = useState(null)
    const [textThree, setTextThree] = useState(null)
    let lineOneText = "Hi, I'm Dave."
    let lineTwoText = "I have a Master's in Computer Science."
    let lineThreeText = "I like to code websites, apps, & programs."


    function runSetTimeout(currentChar, setText, interval) {
        setTimeout = () => {
            let updatedText = textOne + currentChar
            setText(updatedText);
        }, interval;
    }

    function iterateText(currentText, setText) {
        for (let i = 0; i < currentText.length; i++) {
            let currentChar = currentText[i]
            let interval = 0
            switch (currentText[i]) {
                case ',':
                    interval = 2000
                case '.':
                    interval = 3500
                default:
                    interval = 100000000
            }
            runSetTimeout(currentChar, setText, interval)
        }
    }

    // useEffect(() => {
    //     console.log('use effect')
    //     console.log(textOne)
    // }, [])



    iterateText(lineOneText, setTextOne)
    setTextOne("test")
    return (
        <div className="homeContainer">
            <div className='line1'>{textOne}</div>
            <div className='line2'>{textTwo}</div>
            <div className='line3'>{textThree}</div>
        </div>
    );
}

export default Home