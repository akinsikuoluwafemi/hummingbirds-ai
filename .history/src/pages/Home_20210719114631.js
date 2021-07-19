import React from 'react';
import ComVisionHome from '../assets/videos/comvision-home.mp4';



export default function Home() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%)'
        }}


      >
        <source src={ComVisionHome} type="video/mp4"/>
      </video>
      Home
    </div>
  )
}
