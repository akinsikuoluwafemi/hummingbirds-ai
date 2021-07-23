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
	// background: #000;
	height: 100vh;
	width: 100%;
	position: relative;
	


`

export const Video = styled.div`

	height: 100%;
	width: 100%;
	video {
		object-fit: cover;
	}
`

export const Canvas = styled.canvas`
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		display: block;
		// background: red;

`

export const BannerTitle = styled.h1`
	position: absolute;
	bottom: -120px;
	left: -18px;
	color: white;
	// background: red;
`;

export const Headline = styled.span`
	display: block;
	font-size: 23rem;
	font-weight: 900;
	line-height: 0.76;

`

