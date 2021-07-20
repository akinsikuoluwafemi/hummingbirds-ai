import React from 'react';
import { HeaderWrapper, HeaderNav } from './HeaderStyles';


export default function Header() {
  return (
    <HeaderWrapper>
        <img className="logo" src="https://i.postimg.cc/XYgSxQQZ/logo.png" alt=""/>
        <HeaderNav>
            <ul class="nav-area">
              <li><a href="#">home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">portfolio</a></li>
              <li><a href="#">services</a></li>
              <li><a href="#">contact</a></li>
              </ul>
          </HeaderNav>
        <a href="#" class="btn-area">login</a>

    </HeaderWrapper>
  )
}
