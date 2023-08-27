import React from 'react';

import photo from './images/robot.png';

// robot page
function Robot() {


    return (
        <div className='card about' >
            <div className='card-body'>
                <h1 className='title'>Meet Robby our favorite little robot.</h1>
                <img src={photo} className="robot-img" alt="logo" />

            </div>
        </div>
    )
}




export default Robot;