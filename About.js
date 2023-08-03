import React from "react";
import faceImage from './face.jpg';


const About = () => {
    return ( 
        <div className="container">
            <img src={faceImage} 
            alt="Face" 
            style={{
                width: '170px',
                height: 'auto',
            }} className="image"/>
            <div className="who">
            <p>My name is Ayaan Rahman and I am currently a second-year undergraduate student attending 
            the University of Virginia pursuing a B.A. in Computer Science with a minor in data science. 
            In the future, I hope to earn my master's in computer science through the University of Virginia 
            and grasp opportunities to become an active member of the tech industry. 
            Feel free to contact me with any inquiries at mxy9mq@virginia.edu</p>
            </div>
        </div>

     );
}
 
export default About;