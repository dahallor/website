import { Link } from 'react-router-dom'

function Card(props) {
    const openCurly = "{"
    const closedCurly = "}"
    return (
        <div>
            <p>{openCurly}</p>
            <p>'name' : {props.name}</p>
            <p>'description' : {props.description}</p>
            <p>'language' : {props.language}</p>
            <p>'hyperlink' : <a target='_blank' rel="noopener" href={props.hyperlink}>{props.hyperlink}</a></p>
            <p>{closedCurly}</p>
        </div>
    );
}

export default Card