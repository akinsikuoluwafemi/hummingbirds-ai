import { motion } from 'framer-motion';
import styled from 'styled-components'

export const NavigationWrapper = styled(motion.nav)`
	display: none;

	@media (max-width: 800px) {
		display: block;
	}

	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	width: 300px;

	& > button {
		outline: none;
		border: none;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		cursor: pointer;
		position: absolute;
		top: 18px;
		left: 15px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: transparent;
	}
`;

export const SidebarLogoWrapper = styled.div`
	display: none;
	text-align: right;
	margin-top: 2.5rem;

	@media (max-width: 800px) {
		display: block;
	}
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
	margin: 0;
	padding: 0;
	& > .logo {
		cursor: pointer;
		height: 2.5rem;
    text-align: center;
    margin-left: 2rem;
    margin: auto;
		// width: 10rem;
		background: pink;
	}
`;

export const NavbarListItem = styled(motion.li)`
	list-style: none;
	margin-bottom: 20px;
	// display: flex;
	// align-items: center;
	cursor: pointer;
	margin: 0;
	// padding: 0;
  font-size: 1.4rem;
  padding: 1rem 0;
  padding-left: 3rem;
  // background: pink;

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