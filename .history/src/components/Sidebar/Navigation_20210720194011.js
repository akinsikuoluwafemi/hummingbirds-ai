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

const routes = [
  {
    id: 0
  }
]


export const Navigation = () => (
	<NavbarList variants={variants}>
		{itemIds.map((i) => (
			<MenuItem i={i} key={i} />
		))}
	</NavbarList>
);


// export const Navigation = () => (
// 	<NavbarList variants={variants}>
// 			<MenuItem>Home</MenuItem>
// 	</NavbarList>
// );
