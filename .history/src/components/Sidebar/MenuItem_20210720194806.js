import { motion } from 'framer-motion';
import {NavbarListItem } from './SidebarStyles';

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

export const MenuItem = ({ item }) => {
	console.log(typeof item)
  const style = { border: `2px solid ${colors[item.id]}` };
	return (
		<NavbarListItem  variants={variants} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
			<div className="icon-placeholder" style={style} />
			<div className="text-placeholder" style={style} />
		</NavbarListItem>
	);
};
