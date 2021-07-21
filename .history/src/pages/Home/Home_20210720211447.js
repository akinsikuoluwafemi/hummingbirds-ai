import React from 'react';
import ComVisionHome from '../../assets/videos/comvision-home.mp4';
import { VideoLayer } from './HomeStyles';
import  Header  from '../../components/Header/Header';
import SidebarNav from '../../components/Sidebar/SidebarNav';
// import '../../components/Sidebar/sidebar-nav.css';
import HummingBirdLogo from '../../assets/images/humming-logo.svg';


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
					zIndex: '-1',
				}}
			>
				<source src={ComVisionHome} type="video/mp4" />
			</video>

			<VideoLayer>
				<div className="container-fluid">
					<Header />

					<SidebarNav />

					<img style={{ position: 'absolute', top: '5%', left: '50%', height: '2.5rem', cursor: 'pointer' }} className="logo" src={HummingBirdLogo} alt="HummingBirdLogo" />

				</div>
			</VideoLayer>

			<section className="container">another section</section>
		</div>
  );
}
