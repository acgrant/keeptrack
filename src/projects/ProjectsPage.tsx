import { MOCK_PROJECTS } from './MockProjects';
import MOCK_PATIENTS from './MockPatients.json';
import './style.css';

const ProjectsPage = () => {
    return (
        <div className='projects-page-container'>
            <h1>Projects</h1>
            <pre>{JSON.stringify(MOCK_PATIENTS, null, ' ')}</pre>
            <hr />
            <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
        </div>
    );
}

export default ProjectsPage;
