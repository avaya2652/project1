import React, { useContext } from 'react';
import AuthContext from '../../Store/auth-context';
import styles from './Menu.module.css';

const Menu = (props) =>{
    const contx = useContext(AuthContext);
    // console.log(contx)
    return(
        <div className={styles['manu_container']}>
            <ul className={styles['menu_items']}>
               { contx.isLogin && <li className={styles['menu_item']}>
                        Admin
                </li>}
                { contx.isLogin && <li className={styles['menu_item']} onClick={contx.logoutHandler}>
                        Logout
                </li>}
                { contx.isLogin && <li className={styles['menu_item']}>
                        Home
                </li>}
            </ul>
        </div>
    )
}

export default Menu;