import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Projects = () => {

    const [id, setId] = useState('');
    const navigate = useNavigate();

    const gotoProjects = (id) => {
        navigate(`/projects/${id}`)
    }

    return (
        <div>
            <h3>Proyectos</h3>
            <input type="number" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={() => gotoProjects(id)}>Goto</button>
        </div>
    );
};

export default Projects;