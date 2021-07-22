import React, {useEffect, useRef, useState} from 'react';
import ComVisionHome from '../../assets/videos/comvision-home.mp4';
import { VideoLayer } from './HomeStyles';
import  Header  from '../../components/Header/Header';
import SidebarNav from '../../components/Sidebar/SidebarNav';
import HummingBirdLogo from '../../assets/images/humming-logo.svg';
import {SidebarLogoWrapper } from '../../components/Sidebar/SidebarStyles';

export default function Home() {
	
	const canvasRef = useRef(null);
	const contextRef = useRef(null)
	const [isDrawing, setIsDrawing] = useState(false);


	useEffect(() => {
		
		const canvas = canvasRef.current;
		canvas.width = window.innerWidth * 2;
		canvas.height = window.innerHeight * 2;

		canvas.style.width = `${window.innerWidth}px`;
		canvas.style.height = `${window.innerHeight}px`;

		const context = canvas.getContext('2d');
		context.scale(2, 2);
		context.lineCap = 'round';
		context.strokeStyle = 'white';
		context.lineWidth = 20;
		contextRef.current = context;


		






	},[])

	const startDrawing = ({nativeEvent}) => {
	
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

			<VideoLayer
				onMouseDown={startDrawing}
				onMouseUp={finishDrawing}
				onMouseMove={draw}
				ref={canvasRef}


			>
				canva



			</VideoLayer>

			<section className="container">another section</section>
		</div>
  );
}
