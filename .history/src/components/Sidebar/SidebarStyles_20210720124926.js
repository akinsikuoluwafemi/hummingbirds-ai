import { motion } from 'framer-motion';
import styled from 'styled-components'

export const NavigationWrapper = styled(motion.nav)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 300px;

	
`;

export const NavigationWrapperBackground = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 300px;
	background: #fff;
`;

export const NavbarList = styled(motion.ul)`
	padding: 25px;
	position: absolute;
	top: 100px;
	width: 230px;
`;

export const NavbarListItem = styled(motion.li)`
	list-style: none;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
	cursor: pointer;

	& > .icon-placeholder {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		flex: 40px 0;
		margin-right: 20px;
	}

	& > .text-placeholder {
		border-radius: 5px;
		width: 200px;
		height: 20px;
		flex: 1;
	}
`;