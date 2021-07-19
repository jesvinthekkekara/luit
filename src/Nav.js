import React, {useState, useEffect } from 'react'
import './Nav.css';

function Nav() {
    const[show,handleShow] = useState(false)

    useEffect( () => {
        // after scrolling 100px set handleshow true; this is done to show the black background color
        window.addEventListener("scroll", () => {
            // on scrolling Y axis
            if(window.scrollY > 100) {
                handleShow(true);
            }
            else handleShow(false);
        })
        return () => {

            window.removeEventListener("scroll");
        }

    },[])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            {/* when ever show is true call nav_black */} 
            <img 
            className="nav_logo" 
            src="https://www.name-doctor.com/nomi.png/52888.png" 
            alt="Streamy logo"/>
             <img 
            className="nav_avatar" 
            src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E.jpg" 
            alt="Profile "/>
            
        </div>
    )
}

export default Nav
