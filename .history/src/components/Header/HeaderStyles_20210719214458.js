import styled from 'styled-components';


export const HeaderWrapper = styled.header`
  background: teal;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 7rem;

  & > .logo {
    cursor: pointer;
  }

`;

export const HeaderNav = styled.nav`

 & > .nav-area li {
    display: inline-block;
    padding: 0 1.5rem;
    text-transform: uppercase;
  }
  

`;