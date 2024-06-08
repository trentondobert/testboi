// Homepage.js
import React from 'react';
import './css/Home.css'
import ImageGallery from "react-image-gallery";
import DaleImage from './Images/Dale.jpg';


function Homepage() {
  return (
    <div className="homepage">
      <div className="">
        <h1>Seamless Gutters</h1>
        {/*       <div>
            <img id="QRcode" src={qrImage}></img>
            <p>Scan me for Discount!</p>
        </div> */}
        <div className="carousel-container">
          <ImageCarousel />
        </div>
      </div>

      <div className="sectionDiv">
        <div className="content">
          <h1>About Us</h1>
          <p>
            Welcome to Seamless Gutters, where impeccable service meets the expertise of Dale, your premier gutter cleaning specialist. 
            With a steadfast commitment to excellence, Dale brings years of experience to every project, 
            ensuring the seamless operation of your property's drainage system.
            At Seamless Gutters, Dale prioritizes customer satisfaction above all else. 
            From meticulous debris removal to comprehensive inspections, 
            Dale delivers tailored solutions designed to meet the unique needs of each client. 
            With a focus on professionalism, reliability, and affordability, 
            trust Dale and the Seamless Gutters team to keep your property protected and your gutters clear year-round. 
            Schedule your appointment today and experience the unparalleled service that defines Seamless Gutters.
          </p>
        </div>
        <div className="image-container">
          <img id="portrait" src={DaleImage} alt="Dale Anderson"></img>
        </div>
      </div>
    </div>
  );

}



const images = [
  {
    original: require("./Images/Work/dirtygutter2.jpg"),
    thumbnail: require("./Images/Work/dirtygutter2.jpg"),
  },
  {
    original: require("./Images/Work/blueunder.jpg"),
    thumbnail: require("./Images/Work/blueunder.jpg"),
  },
  {
    original: require("./Images/Work/window.jpg"),
    thumbnail: require("./Images/Work/window.jpg"),
  },
];

class ImageCarousel extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default Homepage;
