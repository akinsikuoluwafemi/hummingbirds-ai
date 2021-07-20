import styled from 'styled-components';


export const HeaderWrapper = styled.header`

  @media(max-width: 800px){
    display: none;
  }

	// background: red;
	display: -webkit-flex!important;
	display: -moz-flex!important;
	display: -ms-flex!important;
	display: -o-flex!important;
	display: flex!important;
	justify-content: space-between!important;
	align-items: center!important;
	padding: 3rem 7rem!important;
	font-size: 1.3rem!important;

	& > .logo {
		cursor: pointer!important;
	}
	& > .nav-area li {
		display: inline-block!important;
		// padding: 0 1.5rem!important;
		text-transform: uppercase!important;
		// background: teal!important;
	}
`;

export const HeaderNav = styled.nav`
	& > .nav-area li {
		display: inline-block !important;
		padding: 0 1.5rem !important;
		text-transform: uppercase !important;
		// background: teal!important;
	}
`;