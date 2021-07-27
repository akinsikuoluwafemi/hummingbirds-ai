import styled from 'styled-components';
import { motion}	 from 'framer-motion';


export const VideoLayer = styled.div`
	// background: ${(props) => props.theme.background};
	// background: #222;
	height: 100vh;
	// z-index: 2;
	// padding-top: -2rem;
`;

export const Banner = styled.div`
	background: red;
	height: 100vh!important;
	width: 100%;
	position: relative;
	


`



export const Canvas = styled.canvas`
		position: absolute;
		background: transparent;
		top: 0;
		left: 0;
		height: 100%;
		// width: 100%;
		display: block;
		// background: red;
    z-index: 3;


`

export const BannerTitle = styled.h1`
	// visibility: hidden;
	// bottom: -120px;
	top: 50%;
	left: -18px;
	color: white;
	background: red;
	// z-index: 10;
	position: absolute;
	z-index: 4;
	margin-top: 7rem;
`;

export const Headline = styled.span`
	display: block;
	font-size: 23rem;
	font-weight: 900;
	line-height: 0.76;

`

