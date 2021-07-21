import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { NavbarList} from './SidebarStyles';

const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const itemIds = [0, 1, 2, 3, 4];

const menus = [
	{
		id: 0,
		name: 'Home',
	},
	{
		id: 1,
		name: 'About',
	},
	{
		id: 2,
		name: 'Guacamole',
	},
	{
		id: 3,
		name: 'Privacy',
	},
	{
		id: 4,
		name: 'Blog',
	},
	{
		id: 5,
		name: 'Contact',
	},
];



// export const Navigation = () => (
// 	<NavbarList variants={variants}>
// 		{itemIds.map((i) => (
// 			<MenuItem i={i} key={i} />
// 		))}
// 	</NavbarList>
// );

export const Navigation = () => (
  <NavbarList variants={variants}>
    <div></div>
		{menus.map((item) => (
			<MenuItem item={item.name} key={item.id} />
		))}
	</NavbarList>
);


// export const Navigation = () => (
// 	<NavbarList variants={variants}>
// 			<MenuItem>Home</MenuItem>
// 	</NavbarList>
// );

