import React from 'react';
import { HeaderWrapper, HeaderNav } from './HeaderStyles';


export default function Header() {
  return (
    <HeaderWrapper>
        <img className="logo" src="https://i.postimg.cc/XYgSxQQZ/logo.png" alt=""/>
        <HeaderNav>
            <ul class="nav-area">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Guacamole</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Blog</a></li>
          
              </ul>
      </HeaderNav>
      
        <a href="#" class="btn-area">Contact</a>

    </HeaderWrapper>
  )
}
