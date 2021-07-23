// import React, {useEffect, useRef, useState} from 'react';
// import ComVisionHome from '../../assets/videos/comvision-home.mp4';
// import { VideoLayer, Banner, Video, Canvas, BannerTitle, Headline } from './HomeStyles';
// import  Header  from '../../components/Header/Header';
// import SidebarNav from '../../components/Sidebar/SidebarNav';
// import HummingBirdLogo from '../../assets/images/humming-logo.svg';
// import {SidebarLogoWrapper } from '../../components/Sidebar/SidebarStyles';

// export default function Home() {
	
// 	const canvasRef = useRef(null);
// 	const contextRef = useRef(null)
// 	const [isDrawing, setIsDrawing] = useState(false);


// 	useEffect(() => {

		
// 		mountCanvas();


		






// 	}, [])
	
// 	const mountCanvas = () => {
// 			console.log('canvas is mounting')
// 			  const canvas = canvasRef.current;
// 				canvas.width = window.innerWidth * 2;
// 				canvas.height = window.innerHeight * 2;
// 				canvas.style.width = `${window.innerWidth}px`;
// 				canvas.style.height = `${window.innerHeight}px`;

// 				const context = canvas.getContext('2d');
// 				context.scale(2, 2);
// 				context.lineCap = 'round';
// 				context.strokeStyle = 'white';
// 				context.lineWidth = 30;
// 		contextRef.current = context;
// 		console.log(context);

// 	}

// 	const startDrawing = ({nativeEvent}) => {
// 		console.log('starting')
// 		const { offsetX, offsetY } = nativeEvent;
		
// 		contextRef.current.beginPath();
// 		contextRef.current.moveTo(offsetX, offsetY);
// 		setIsDrawing(true)
// 	}
 
// 	const finishDrawing = () => {
// 		contextRef.current.closePath();
// 		setIsDrawing(false);
		
// 	}

// 	const draw = ({nativeEvent}) => {
// 		if(!isDrawing){
// 			return
// 		}
		
// 		const { offsetX, offsetY } = nativeEvent;
// 		console.log(offsetX, offsetY);
// 		contextRef.current.lineTo(offsetX, offsetY);
// 		contextRef.current.stroke()
// 	}


//   return (
// 		<Banner>
// 			<video
// 				autoPlay
// 				loop
// 				muted
// 				style={{
// 					position: 'absolute',
// 					width: '100%',
// 					left: '50%',
// 					top: '50%',
// 					height: '100%',
// 					objectFit: 'cover',
// 					transform: 'translate(-50%, -50%)',
// 					zIndex: '-1',
// 				}}
// 			>
// 				<source src={ComVisionHome} type="video/mp4" />
// 			</video>

// 			{/* <VideoLayer>
// 				<canvas
// 					onMouseOver={startDrawing}
// 					onMouseUp={finishDrawing}
// 					onMouseMove={draw}
// 					ref={canvasRef}
// 				/>

// 			</VideoLayer>

// 			<section className="container">another section</section> */}

// 		</Banner>
		
//   );
// }



// import React, { useEffect, useRef, useState } from 'react';
// import ComVisionHome from '../../assets/videos/comvision-home.mp4';
// import { VideoLayer, Banner, Video, Canvas, BannerTitle, Headline } from './HomeStyles';
// import Header from '../../components/Header/Header';
// import SidebarNav from '../../components/Sidebar/SidebarNav';
// import HummingBirdLogo from '../../assets/images/humming-logo.svg';
// import { SidebarLogoWrapper } from '../../components/Sidebar/SidebarStyles';

// export default function Home() {
// 	const canvasRef = useRef(null);
// 	const contextRef = useRef(null);
// 	const [isDrawing, setIsDrawing] = useState(false);

// 	useEffect(() => {
// 		mountCanvas();
// 	}, []);

// 	const mountCanvas = () => {
// 		console.log('canvas is mounting');
// 		const canvas = canvasRef.current;
// 		canvas.width = window.innerWidth * 2;
// 		canvas.height = window.innerHeight * 2;
// 		canvas.style.width = `${window.innerWidth}px`;
// 		canvas.style.height = `${window.innerHeight}px`;

// 		const context = canvas.getContext('2d');
// 		context.scale(2, 2);
// 		context.lineCap = 'round';
// 		context.strokeStyle = 'white';
// 		context.lineWidth = 120;
// 		contextRef.current = context;
// 		console.log(context);
// 		console.log(contextRef)
// 	};

// 	const startDrawing = ({ nativeEvent }) => {
// 		console.log('starting');
// 		console.log(nativeEvent)
// 		const { offsetX, offsetY } = nativeEvent;

// 		contextRef.current.beginPath();
// 		contextRef.current.moveTo(offsetX, offsetY);
// 		setIsDrawing(true);
		
// 	};

// 	const finishDrawing = () => {
// 		contextRef.current.closePath();
// 		setIsDrawing(false);
// 	};

// 	const draw = ({ nativeEvent }) => {
// 		if (!isDrawing) {
// 			return;
// 		}

// 		const { offsetX, offsetY } = nativeEvent;
// 		console.log(offsetX, offsetY);
// 		contextRef.current.lineTo(offsetX, offsetY);
// 		contextRef.current.stroke();
// 	};

// 	return (
// 		<Banner>
// 			<video
// 				// autoPlay
// 				loop
// 				muted
// 				style={{
// 					position: 'absolute',
// 					width: '100%',
// 					left: '50%',
// 					top: '50%',
// 					height: '100%',
// 					objectFit: 'cover',
// 					transform: 'translate(-50%, -50%)',
// 					zIndex: '-1',
// 				}}
// 			>
// 				<source src={ComVisionHome} type="video/mp4" />
// 			</video>

// 			<Canvas onMouseOver={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw} ref={canvasRef} />
// 			<BannerTitle>
// 				<Headline>Dig</Headline>
// 				<Headline>Deep</Headline>
// 			</BannerTitle>

// 			{/* <VideoLayer>
// 				<canvas
// 					onMouseOver={startDrawing}
// 					onMouseUp={finishDrawing}
// 					onMouseMove={draw}
// 					ref={canvasRef}
// 				/>

// 			</VideoLayer>

// 			<section className="container">another section</section> */}
// 		</Banner>
// 	);
// }


import React, { useEffect, useRef, useState } from 'react';
import ComVisionHome from '../../assets/videos/comvision-home.mp4';
import { VideoLayer, Banner, Video, Canvas, BannerTitle, Headline } from './HomeStyles';
import Header from '../../components/Header/Header';
import SidebarNav from '../../components/Sidebar/SidebarNav';
import HummingBirdLogo from '../../assets/images/humming-logo.svg';
import { SidebarLogoWrapper } from '../../components/Sidebar/SidebarStyles';

// custom hook
import useWindowSize from '../../hooks/useWindowSize';



export default function Home() {
	// const canvasRef = useRef(null);
	// const contextRef = useRef(null);
	// const [isDrawing, setIsDrawing] = useState(false);

	// useEffect(() => {
		// mountCanvas();
	// }, []);

	// const mountCanvas = () => {
	// 	console.log('canvas is mounting');
	// 	const canvas = canvasRef.current;
	// 	canvas.width = window.innerWidth * 2;
	// 	canvas.height = window.innerHeight * 2;
	// 	canvas.style.width = `${window.innerWidth}px`;
	// 	canvas.style.height = `${window.innerHeight}px`;

	// 	const context = canvas.getContext('2d');
	// 	context.scale(2, 2);
	// 	context.lineCap = 'round';
	// 	context.strokeStyle = 'white';
	// 	context.lineWidth = 120;
	// 	contextRef.current = context;
	// 	console.log(context);
	// 	console.log(contextRef);
	// };

	// const startDrawing = ({ nativeEvent }) => {
	// 	console.log('starting');
	// 	console.log(nativeEvent);
	// 	const { offsetX, offsetY } = nativeEvent;

	// 	contextRef.current.beginPath();
	// 	contextRef.current.moveTo(offsetX, offsetY);
	// 	setIsDrawing(true);
	// };

	// const finishDrawing = () => {
	// 	contextRef.current.closePath();
	// 	setIsDrawing(false);
	// };

	// const draw = ({ nativeEvent }) => {
	// 	if (!isDrawing) {
	// 		return;
	// 	}

	// 	const { offsetX, offsetY } = nativeEvent;
	// 	console.log(offsetX, offsetY);
	// 	contextRef.current.lineTo(offsetX, offsetY);
	// 	contextRef.current.stroke();
	// };


	let canvas = useRef(null);
	const size = useWindowSize();
	console.log(size);
	let [moving, setMoving] = useState(false);
	
	useEffect(() => {
		let renderingElement = canvas.current;
		let drawingElement = renderingElement.cloneNode();

		let drawingCtx = drawingElement.getContext('2d');
		let renderingCtx = renderingElement.getContext('2d');

		let lastX;
		let lastY;

		renderingCtx.globalCompositionOperation = 'source-over';
		renderingCtx.fillStyle = '#000';
		renderingCtx.fillRect(0, 0, size.width, size.height);



		renderingElement.addEventListener('mousemove', (e) => {
			setMoving(true);
			lastX = e.pageX - renderingElement.offsetLeft;
			lastY = e.pageY - renderingElement.offsetTop;

		})

		renderingElement.addEventListener('mouseup', (e) => {
			setMoving(false);
			lastX = e.pageX - renderingElement.offsetLeft;
			lastY = e.pageY - renderingElement.offsetTop;
		});
		

		renderingElement.addEventListener('mousemove', (e) => {

			if(moving){
				
			}

		});




		
	}, [size.height, size.width])


	return (
		<Banner>
			<video
				// autoPlay
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

			{/* <Canvas onMouseOver={startDrawing} onMouseUp={finishDrawing} onMouseMove={draw} ref={canvasRef} /> */}

			<Canvas height={size.height} width={size.width} ref={ canvas} />

			<BannerTitle>
				<Headline>Dig</Headline>
				<Headline>Deep</Headline>
			</BannerTitle>

			{/* <VideoLayer>
				<canvas
					onMouseOver={startDrawing}
					onMouseUp={finishDrawing}
					onMouseMove={draw}
					ref={canvasRef}
				/>

			</VideoLayer>

			<section className="container">another section</section> */}
		</Banner>
	);
}