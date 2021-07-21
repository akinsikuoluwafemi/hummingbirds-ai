import React from 'react';
import { HeaderWrapper, HeaderNav } from './HeaderStyles';
import HummingBirdLogo from '../../assets/images/humming-logo.svg';

export default function Header() {
  return (
		<HeaderWrapper>
			<div>{/* <img className="logo" src={HummingBirdLogo} alt="HummingBirdLogo" /> */}</div>
			{/* <img className="logo" src={HummingBirdLogo} alt="HummingBirdLogo" /> */}
			{/* <p>Logo</p> */}
			<HeaderNav>
				<ul class="nav-area">
					<li>
						<a href="#">Home</a>
					</li>
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
				</ul>
			</HeaderNav>
			<ul class="nav-area">
				<li style={{ textTransform: 'capitalize' }}>
					<a href="#">Contact</a>
				</li>
			</ul>
		</HeaderWrapper>
  );
}
