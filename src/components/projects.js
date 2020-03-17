import React from 'react';
import ProjectBoxes from './projectBoxes';
import {FaJs, FaReact, FaNodeJs, FaCss3, FaHtml5} from "react-icons/fa";


const Projects = () => {
    return <div>
        <h1>Projects</h1>
        <div>
            <FaJs /> <FaReact /> <FaNodeJs /> <FaCss3 /> <FaHtml5 />
        </div>
        <ProjectBoxes />
    </div>
}

export default Projects;