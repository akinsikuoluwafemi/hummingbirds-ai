import React from 'react';
import ComVisionHome from '../assets/videos/comvision-home.mp4';



export default function Home() {
  return (
    <div>
      <video
        autoPlay
        loop
      >
        <source src={ComVisionHome} type="video/mp4"/>
      </video>
      Home
    </div>
  )
}
