import styled from 'styled-components';
import { motion}	 from 'framer-motion';


export const VideoLayer = styled.div`
	// background: ${(props) => props.theme.background};
	// background: #222;
	height: 100vh;
	// z-index: 2;
	// padding-top: -2rem;
`;

export const Banner = styled(motion.div)`
	height: 100vh !important;
	width: 100%;
	position: relative;
	overflow-y: hidden !important;

	& > a > img.logo {
		position: absolute !important;
		top: 2rem !important;
		left: 3.5rem !important;
		z-index: 10;
	}

	& > img.fyl-logo {
		height: 30rem;
		position: absolute;
		bottom: 2rem;
		left: 3.5rem !important;
		z-index: 10;

	}

	& > .fylmore {
		position: absolute;
		top: 2rem;
		right: 3.5rem;
		z-index: 10;

	}

	& > .readmore {
		position: absolute;
		bottom: 2rem;
		right: 3.5rem;
		z-index: 10;

	}
`;


export const ButtonComponent = styled(motion.button)`
	
	color: #000;
	border: none;
	font-size: 3rem;
	font-weight: 900;
	padding: 1rem 1.5rem;


	${props => props.fylmore && `
		background: #E6007E;
		transition: all .5s ease;

		&:hover {
			background: white;
			color: #E6007E;
		}

		& > p {
			position: relative;
    	display: inline-block;
			margin: 0;

			& > span:first-of-type {
				position: absolute;
				width: 28%;
				border-top: 2px solid #58C0EE;
				left: 0;
				top: 50%;
				margin: auto;

			}


		}

	`}

	${props => props.readmore && `
		background: #58C0EE;
		transition: all .5s ease;


			&:hover {
			background: #fff;
			color: #58C0EE;
		}


	`}
	

	&:focus {
		outline: none;
	}
`;


export const Canvas = styled.canvas`
		position: absolute;
		background: transparent;
		top: 0;
		left: 0;
		height: 100vh;
		// width: 100%;
		display: block;
		// background: red;
    z-index: 3;


`

export const BannerTitle = styled.h1`
	// visibility: hidden;
	// bottom: -120px;
	position: absolute;

	top: 50%;
	left: -18px;
	color: white;
	// z-index: 10;
	z-index: 4;
	margin-top: 7rem;
`;

export const Headline = styled.span`
	display: block;
	font-size: 23rem;
	font-weight: 900;
	line-height: 0.76;

`

