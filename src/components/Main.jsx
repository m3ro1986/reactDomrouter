import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {

    const[ password, setPassword] = useState('')
    const navigate = useNavigate()

    const gotoProject = () => {
        if ( password === 'manzana') {
            navigate('/projects')
        } else {
            alert('contraseña incorrecta')
        }
            
        
    }

    return (
        <div>
            <h3>Principal</h3>
            <input type="text" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={gotoProject}> ir a proyectos </button>
        </div>
    );
};

export default Main;