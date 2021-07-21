import styled from 'styled-components';


export const HeaderWrapper = styled.header`
	@media (max-width: 800px) {
		display: none;
	}

	background: ${(props) => props.theme.background};
	background: pink;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-items: space-between;

	// display: -webkit-flex;
	// display: -moz-flex;
	// display: -ms-flex;
	// display: -o-flex;
	// display: flex;
	// justify-content: space-between;
	// align-items: center;
	padding: 2rem 6rem;
	// padding: 2rem 0;
	font-size: 1.3rem;

	& > .logo {
		cursor: pointer;
		height: 2rem;
		// width: 2rem;
		// width: 10rem;
		// background: teal;
	}
	& > .nav-area li {
		display: inline-block;
		padding: 0 2rem;
		text-transform: uppercase;
		// background: teal;
	}
`;

export const HeaderNav = styled.nav`
	& > .nav-area li {
		display: inline-block;
		padding: 0 2rem;
		text-transform: capitalize;
    // background: teal;
	}


`;