import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../component/Card';
import './Project.css';
function project() {
    return (
        <div className = 'project'>
             <div className ='project-context'>
                <div className = 'project-header'>
                    <h1 className = 'project-title'>My Project</h1>
                </div>
                <Card className = 'project-card'/>
             </div>
            
        </div>
    );
}

export default project;