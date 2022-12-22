import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Card, Image, Row, Col } from 'react-bootstrap'
import '../styles/card.css'

function CardComponent({ name, description, language, hyperlink, img }) {
    const openCurly = "{"
    const closedCurly = "}"
    let hype = hyperlink


    return (
        <div className="card">
            <div className="row g-0">
                <div className="col-sm-5">
                    <img src={img} className="card-img-top h-100" alt="..." />
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <p className="card-text">{openCurly}</p>
                        <p className="card-text">"name": {name}</p>
                        <p className="card-text">"description": {description}</p>
                        <p className="card-text">"language": {language}</p>
                        <p className="card-text">"hyperlink":
                            <a href={hyperlink} target='_blank'> {hyperlink}</a>
                        </p>
                        <p className="card-text">{closedCurly}</p>
                    </div>
                </div>
            </div>
        </div>










        // <Card className="card">
        //     {/* <Row>
        //         <Col md={6}>
        //             <div className="card flex-row">
        //                 <img className="card-img-left img-thumbnail" src={props.img} /> */}
        //     <Card.Body>
        //         <Card.Text>{openCurly}</Card.Text>
        //         <Card.Text>'name' : {props.name}</Card.Text>
        //         <Card.Text>'description' : {props.description}</Card.Text>
        //         <Card.Text>'language' : {props.language}</Card.Text>
        //         <Card.Text>'hyperlink' : <a target='_blank' rel="noopener" href={props.hyperlink}>{props.hyperlink}</a></Card.Text>
        //         <Card.Text>{closedCurly}</Card.Text>
        //     </Card.Body>
        //     {/* </div>
        //         </Col>
        //     </Row> */}
        // </Card>
    );
}

export default CardComponent