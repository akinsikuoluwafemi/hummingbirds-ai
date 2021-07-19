import React from 'react';
import ComVisionHome from '../assets/videos/comvision-home.mp4';



export default function Home(props) {
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
          transform: 'translate(-50%, -50%)',
          zIndex: '-1'
        }}


      >
        <source src={ComVisionHome} type="video/mp4"/>
      </video>

      <div
        style={{
          height: '100vh',
          zIndex: '2',
          background: `${props => props.theme.background}
        }}
      >
        <p className="container text-white">Home</p>

      </div>
     
      <section >another section</section>
    </div>
  )
}
