import CardComponent from "./Card";
import projects from '../data/db.json'
import Container from 'react-bootstrap/container'
import CardGroup from 'react-bootstrap/CardGroup';
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'



function Portfolio() {
    let projectsLocal = projects.projects

    function getSize() {
        let i = 0
        projectsLocal.map((project) => {
            i += 1
        })
        return i
    }
    useEffect(() => {
        let i = getSize()
    }, [])

    return (
        <Container>
            <Col>
                <Row>
                    {projectsLocal.map((project) =>
                        <CardComponent {...project} />
                    )}
                </Row>
            </Col>
        </Container>
    );
}

export default Portfolio