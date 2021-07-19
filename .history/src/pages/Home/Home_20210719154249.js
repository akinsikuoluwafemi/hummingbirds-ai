import React from 'react';
import ComVisionHome from '../';
import {VideoLayer } from './HomeStyles';


export default function Home(props) {
  console.log(props)
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

      <VideoLayer>

        <p className="container text-white">Home</p>

      </VideoLayer>
     
      <section >another section</section>
    </div>
  )
}
