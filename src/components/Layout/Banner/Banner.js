import React from 'react';
import classes from './Banner.module.css'
import banner from '../../../assets/Images/banner.jpg';
const Banner = () =>{
    return(

        <div className={classes.banner}>
            <img src={banner} alt="Banner of the Day" />
        </div>
        )
}

export default Banner;