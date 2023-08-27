import React from 'react';
import photo from './images/Egghead.jpg';


// about section
function Project() {
    return (
        <div className='card about' >
            <div className='card-body'>
                <h5 className='card-title'>A fun little programming project.</h5>
                <img src={photo} className="egghead-img" alt="logo" />

            </div>
        </div>
    )
}

export default Project;