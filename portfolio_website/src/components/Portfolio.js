import Card from "./Card";
import projects from '../data/db.json'


function Portfolio() {
    let projectsLocal = projects.projects

    return (
        <>
            {projectsLocal.map((project) =>
                <Card {...project} />
            )}
        </>
    );
}

export default Portfolio