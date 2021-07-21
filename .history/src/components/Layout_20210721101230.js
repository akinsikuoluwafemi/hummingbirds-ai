import React from 'react'

export default function Layout({children}) {
  return (
		<div>
			<Header />

			<SidebarNav />

			<SidebarLogoWrapper>
				<img style={{ height: '2.5rem' }} className="logo" src={HummingBirdLogo} alt="HummingBirdLogo" />
			</SidebarLogoWrapper>
		</div>
  );
}