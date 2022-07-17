import React from 'react';
import Cart from '../../Cart/Cart';
import classes from './Header.module.css'
const Header = () =>{
    return(

        <div className={classes.header}>
            <div className={classes['header_left']}>
                <p>Food App</p>
            </div>
            <div className={classes['header_right']}>
                {/* <p>Cart button</p> */}
                <Cart></Cart>
            </div>
        </div>
        )
}

export default Header;