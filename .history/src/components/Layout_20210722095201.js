import React from 'react'
import Header from './Header/Header';
import SidebarNav from './Sidebar/SidebarNav';
import { SidebarLogoWrapper } from './Sidebar/SidebarStyles';
import HummingBirdLogo from '../assets/images/humming-logo.svg';
import CustomCursor from './CustomCursor/CustomCursor';

import Toggle from './Toggle';





export default function Layout({children}) {
  return (
		<div>
			<CustomCursor />

			{/* <Header /> */}

			<SidebarNav />

      <SidebarLogoWrapper>
        {/* <Toggle/> */}
				<img style={{ height: '2.5rem' }} className="logo" src={HummingBirdLogo} alt="HummingBirdLogo" />
			</SidebarLogoWrapper>
			{children}
		</div>
  );
}
