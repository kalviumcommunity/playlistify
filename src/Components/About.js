import React from 'react';
import trophy from '../images/trophy.jpeg'
import "./Navbar.css"


function ContentWithImage() {
  return (

    <>
    <h1 className='About-heading'>About Us </h1>
    <div className=" content-div" style={{ display: 'flex' }}>
      <div className='content-text'>
        <h1>Content</h1>
        <p id='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. .</p>
      </div>
      <div>
        <img className="about-image " src={trophy} alt="aboutimage" />
      </div>
    </div>
    </>
  );
}

export default ContentWithImage;