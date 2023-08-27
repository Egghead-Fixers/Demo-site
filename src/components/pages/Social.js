import React from 'react';

// resume page
function Resume() {
    return (
        <div className='card' >
            <div className='card-body'>


                <h1 className='card-title'>Social Media Accounts</h1>
                <h1 className='title'>You probably know us on YouTube. Click the button to see:</h1>
                <a type="button" href="https://www.youtube.com/c/EggheadFixers" className="btn btn-secondary ">YouTube</a>
                <h1 className='title'>We're blowing up Amazon too. Click the button to see:</h1>
                <a type="button" href="https://www.amazon.com/shop/eggheadfixers" className="btn btn-secondary ">Amazon</a>
                <h1 className='title'>Have you seen our merch? Click the button to see</h1>
                <a type="button" href="https://egghead-fixers.myspreadshop.com/" className="btn btn-secondary">Our Merch Shop</a>

                <hr className="my-4"></hr>
                <h5 className='card-title'>Eggheads Beware</h5>

                <a href="Egghead.pdf" download="egghead"
                    className="btn btn-danger">Do Not Click This Button</a>
            </div>
        </div>
    )
}

export default Resume;