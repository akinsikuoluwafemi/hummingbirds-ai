import React from 'react';
import { HeaderWrapper } from './HeaderStyles';


export default function Header() {
  return (
    <HeaderWrapper>
        <img className="logo" src="https://i.postimg.cc/XYgSxQQZ/logo.png" alt=""/>
        <nav>
            <ul class="nav-area">
              <li><a href="#">home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">portfolio</a></li>
              <li><a href="#">services</a></li>
              <li><a href="#">contact</a></li>
              </ul>
          </nav>
        <a href="#" class="btn-area">login</a>

    </HeaderWrapper>
  )
}
