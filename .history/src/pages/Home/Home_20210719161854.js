import React from 'react';
import ComVisionHome from '../../assets/videos/comvision-home.mp4';
import { VideoLayer } from './HomeStyles';
import { Header  from '../../components/Header/Header';




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
          transform: 'translate(-50%, -50%)',
          zIndex: '-1'
        }}


      >
        <source src={ComVisionHome} type="video/mp4"/>
      </video>

      <VideoLayer>



        <p className="container text-dark">Home</p>

      </VideoLayer>
     
      <section className="container">another section</section>
    </div>
  )
}
