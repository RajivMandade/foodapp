import React from 'react';
import {
Nav,
NavLink,

NavMenu,

} from './NavbarElements';

const Navbar = () => {
return (

	<Nav>
		

		<NavMenu>
		<NavLink to='/veg' activeStyle>
			VEG FOOD ITEMS
		</NavLink>
		<NavLink to='/nonveg' activeStyle>
			NON-VEG FOOD ITEMS
		</NavLink>
		<NavLink to='/starters' activeStyle>
			STARTERS
		</NavLink>
		<NavLink to='/team' activeStyle>
			SWEETS
		</NavLink>
		<NavLink to='/blogs' activeStyle>
			SPECIAL DISHES
		</NavLink>
		<NavLink to='/sign-up' activeStyle>
			About US
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
	
	</Nav>
	
);
};

export default Navbar;
