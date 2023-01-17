import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProjectsSons = () => {

    const { id } = useParams();

    return (
        <div>
           este es un projecto hijo {id}
        </div>
    );
};

export default ProjectsSons;