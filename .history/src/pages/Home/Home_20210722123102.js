import React, {useEffect, useRef, useState} from 'react';
import ComVisionHome from '../../assets/videos/comvision-home.mp4';
import { VideoLayer, Banner, Video, Canvas, BannerTitle, Headline } from './HomeStyles';
import  Header  from '../../components/Header/Header';
import SidebarNav from '../../components/Sidebar/SidebarNav';
import HummingBirdLogo from '../../assets/images/humming-logo.svg';
import {SidebarLogoWrapper } from '../../components/Sidebar/SidebarStyles';

export default function Home() {
	
	const canvasRef = useRef(null);
	const contextRef = useRef(null)
	const [isDrawing, setIsDrawing] = useState(false);


	useEffect(() => {

		
		// mountCanvas();


		






	}, [])
	
	const mountCanvas = () => {
			console.log('canvas is mounting')
			  const canvas = canvasRef.current;
				canvas.width = window.innerWidth * 2;
				canvas.height = window.innerHeight * 2;
				canvas.style.width = `${window.innerWidth}px`;
				canvas.style.height = `${window.innerHeight}px`;

				const context = canvas.getContext('2d');
				context.scale(2, 2);
				context.lineCap = 'round';
				context.strokeStyle = 'white';
				context.lineWidth = 30;
		contextRef.current = context;
		console.log(context);

	}

	const startDrawing = ({nativeEvent}) => {
		console.log('starting')
		const { offsetX, offsetY } = nativeEvent;
		
		contextRef.current.beginPath();
		contextRef.current.moveTo(offsetX, offsetY);
		setIsDrawing(true)
	}
 
	const finishDrawing = () => {
		contextRef.current.closePath();
		setIsDrawing(false);
		
	}

	const draw = ({nativeEvent}) => {
		if(!isDrawing){
			return
		}
		
		const { offsetX, offsetY } = nativeEvent;
		console.log(offsetX, offsetY);
		contextRef.current.lineTo(offsetX, offsetY);
		contextRef.current.stroke()
	}


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
				<canvas
					onMouseOver={startDrawing}
					onMouseUp={finishDrawing}
					onMouseMove={draw}
					ref={canvasRef}
				/>

			</VideoLayer>

			<section className="container">another section</section>
		</div>
		// <Banner>
		// 	<Video>
		// 		<video
		// 			height="100%"
		// 			width="100%"
		// 			loop
		// 			autoPlay
		// 			src={ComVisionHome}
					
		// 		>

		// 		</video>
		// 	</Video>
		// 	{/* <Canvas /> */}
		// 	{/* <BannerTitle>
		// 		<Headline>DIG</Headline>
		// 		<Headline>DEEP</Headline>
		// 	</BannerTitle> */}
		// </Banner>
  );
}
