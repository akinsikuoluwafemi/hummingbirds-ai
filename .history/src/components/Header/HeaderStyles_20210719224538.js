import styled from 'styled-components';


export const HeaderWrapper = styled.header`

  @media(max-width: 800px){
    display: none;
  }

	// background: red;
	display: -webkit-flex;
	display: -moz-flex;
	display: -ms-flex;
	display: -o-flex;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 3rem 7rem;
	font-size: 1.3rem;

	& > .logo {
		cursor: pointer;
	}
	& > .nav-area li {
		display: inline-block;
		// padding: 0 1.5rem;
		text-transform: uppercase;
		// background: teal;
	}
`;

export const HeaderNav = styled.nav`
	& > .nav-area li {
		display: inline-block;
		padding: 0 1.5rem;
		text-transform: uppercase;
    // background: teal;
	}


`;