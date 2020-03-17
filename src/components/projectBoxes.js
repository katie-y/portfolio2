import React, { Component } from 'react';
import {FaJs, FaReact, FaNodeJs, FaCss3, FaHtml5} from "react-icons/fa";

class ProjectBox extends Component {
    state = {
        projects: [
            {name:"Project 1", icon: <FaJs />},
            {name: "Project 2", icon: <FaReact />},
            {name: "Project 3", icon: <FaNodeJs />},
            {name: "Project 4", icon: <FaCss3 />},
            {name: "Project 5", icon: <FaHtml5 />},
        ]
    }

    render() {

        const allProjects = this.state.projects.map((project, index) => {
            return <li className="box" key={index}>{project.name}{project.icon}</li>
        })
    return (
        <div className="boxes">{allProjects}</div>
    )
    }
}

export default ProjectBox;