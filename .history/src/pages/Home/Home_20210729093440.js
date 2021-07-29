import React, { useEffect, useRef, useState } from 'react';
import ComVisionHome from '../../assets/videos/comvision-home.mp4';
import { VideoLayer, Banner, Canvas, BannerTitle, Headline, ButtonComponent } from './HomeStyles';
import Header from '../../components/Header/Header';
import SidebarNav from '../../components/Sidebar/SidebarNav';
import HummingBirdLogo from '../../assets/images/Recurso 4.svg';
import FYLlogo from '../../assets/images/FYL.svg';
import { motion}	 from 'framer-motion';

// links
import { Link} from 'react-router-dom';


// custom hook
import useWindowSize from '../../hooks/useWindowSize';



export default function Home() {
	



	
	
	
	let canvas = useRef(null);

	let fylTextCanvas = useRef(null);
	let logoRef = useRef(null);
	let fylmoreRef = useRef(null);
	let readMoreRef = useRef(null);

	const size = useWindowSize();



	// console.log(size);

	// const url = 'https://cloud.githubusercontent.com/assets/4652816/12771961/5341c3c4-ca68-11e5-844c-f659831d9c00.jpg';

	const url = 'https://res.cloudinary.com/dt69gb9me/image/upload/v1627400018/SPEED_1_ckjprk.png';

	useEffect(() => {
		
		let curCanvas = canvas.current;
		let fylCurCanvas = fylTextCanvas.current;
		let fylLogo = logoRef.current;
		let fylmoreBtn = fylmoreRef.current;
		let readMoreBtn = readMoreRef.current;


		// console.log(curCanvas);

		const ctx = curCanvas.getContext('2d');
		// console.log(ctx);

		let img = new Image();
		img.src = url;
		// console.log(img)

		img.onload = function (){
			let width = size.width;
			let height = size.height;

			curCanvas.width = size.width;
			curCanvas.height = size.height;

			ctx.drawImage(img, 0, 0, width, height);
		}

		let isPress = false;
		let old = null;


		curCanvas.addEventListener('mouseover', function(e){
			isPress = true;
			old = { x: e.offsetX, y: e.offsetY };
			return {
				isPress,
				old,
			};
		})


		curCanvas.addEventListener('mouseout', function (e) {
			fylCurCanvas.style.zIndex = '10';
			fylLogo.style.zIndex = '10';
			fylmoreBtn.style.zIndex = '10';
			readMoreBtn.style.zIndex = '10';

			fylCurCanvas.style.transition = 'all .6s ease';
			fylLogo.style.transition = 'all .6s ease';
			fylmoreBtn.style.transition = 'all .6s ease';
			readMoreBtn.style.transition = 'all .6s ease';
			

			
		});


		curCanvas.addEventListener('mousemove', function(e){
			if(isPress){
			fylCurCanvas.style.zIndex = '2';
			fylLogo.style.zIndex = '2';
			fylmoreBtn.style.zIndex = '2';
			readMoreBtn.style.zIndex = '2';

			fylCurCanvas.style.transition = 'all .6s ease';
			fylLogo.style.transition = 'all .6s ease';
			fylmoreBtn.style.transition = 'all .6s ease';
			readMoreBtn.style.transition = 'all .6s ease';
			

				
				let x = e.offsetX;
				let y = e.offsetY;

    		ctx.globalCompositeOperation = 'destination-out';

				ctx.beginPath();
				ctx.arc(x, y, 10, 0, 2 * Math.PI);
				ctx.fill();

				ctx.lineWidth = 100;
				ctx.beginPath();
				ctx.lineCap = 'round';

				ctx.moveTo(old.x, old.y);
				ctx.lineTo(x, y);
				ctx.stroke();
				console.log(ctx);
				

    		old = { x: x, y: y };

			}
			return {
				old,
				ctx
			}


		})
		
		curCanvas.addEventListener('mouseup', function (e) {
			fylCurCanvas.style.zIndex = '10';
			fylLogo.style.zIndex = '10';
			fylmoreBtn.style.zIndex = '10';
			readMoreBtn.style.zIndex = '10';


			fylCurCanvas.style.transition = 'all .6s ease';
			fylLogo.style.transition = 'all .6s ease';
			fylmoreBtn.style.transition = 'all .6s ease';
			readMoreBtn.style.transition = 'all .6s ease';
			
			
			isPress = false;
			return {
				isPress
			}
		});





	},[size.height, size.width]);


const parent = {
	// initial: {y: 800},
	animate: {
		y: 0,
		transition: {
			// staggerChildren: 0.05
		}
	}
}

const child = {
	initial: {y: 800},
	animate: {
		y: 0,
		transition: {
			duration: 1,
			ease: [0.6, 0.05, -0.01, 0.9]
		}
	}
}

const feelMore = {
	initial: {y: -800},
	animate: {
		y: 0,
		transition: {
			duration: 1,
			ease: [0.6, 0.05, -0.01, 0.9]
		}
	}
}





	


	return (
		<Banner variants={parent} initial="initial" animate="animate">
			<Canvas ref={canvas}></Canvas>
			<video
				// autoPlay
				loop
				muted
				style={{
					// position: 'absolute',
					// width: '100%',
					// left: '50%',
					// top: '50%',
					// height: '100%',
					objectFit: 'cover',
					// zIndex: '-1',
					top: '0',
					left: '0',
					height: '100%',
					width: '100%',
					zIndex: '-1',
					willChang: 'transform',
				}}
			>
				<source src={ComVisionHome} type="video/mp4" />
			</video>

		
			<Link to="/">
			<img ref={logoRef} className="logo img-fluid" style={{ height: '6rem' }} src={HummingBirdLogo} alt="hummingbirs ai logo" />
				
			</Link>
		
			<motion.img variants={child} ref={fylTextCanvas} className="img-fluid fyl-logo" src={FYLlogo} alt="feel your life" />
		
			<ButtonComponent variants={feelMore}  ref={fylmoreRef} className="fylmore" fylmore
				whileHover={{ scale: 1.1 }}
    		whileTap={{ scale: 0.9 }}

			
			>
			
				<p>
					FEEL
					<span></span> &nbsp;
					<span>FYL MORE</span>

				</p>

			</ButtonComponent>

			<ButtonComponent  variants={child} ref={readMoreRef} className="readmore" readmore
					whileHover={{ scale: 1.1 }}
    		whileTap={{ scale: 0.9 }}
			
			>
				<span>READ MORE</span>

			</ButtonComponent>
		</Banner>
	);
}