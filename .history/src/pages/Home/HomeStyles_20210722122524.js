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
	background: black;
	height: 100vh;
	width: 100%;
	position: relative;
	


`

export const Video = styled.video`
	height: 100%;
	width: 100%;
	video {
		object-fit: cover;
	}
`

