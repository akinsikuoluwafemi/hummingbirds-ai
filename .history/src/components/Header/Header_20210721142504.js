import React from 'react';
import { HeaderWrapper, HeaderNav } from './HeaderStyles';
import HummingBirdLogo from '../../assets/images/humming-logo.svg';
import Toggle from '../../'
import { Switch } from 'antd';


export default function Header() {
  

  function onChange(checked) {
		console.log(`switch to ${checked}`);
  }


  return (
		<HeaderWrapper>
			<img className="logo" src={HummingBirdLogo} alt="HummingBirdLogo" />
			{/* <img className="logo" src={HummingBirdLogo} alt="HummingBirdLogo" /> */}
			{/* <p>Logo</p> */}
			<HeaderNav>
				<ul class="nav-area">
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Guacamole</a>
					</li>
					<li>
						<a href="#">Privacy</a>
					</li>
					<li>
						<a href="#">Blog</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
			</HeaderNav>
			{/* <ul class="nav-area">
				<li style={{ textTransform: 'capitalize' }}>
					<a href="#">Contact</a>
				</li>
			</ul> */}
			
		</HeaderWrapper>
  );
}
