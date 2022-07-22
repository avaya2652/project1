import React from "react";
import classes from './Movie.module.css';

const Movie = (props) =>{
    return(
        <div className={classes.movie}>
            <h3 className={classes.title}>{props.title}</h3>
            <p className={classes.description}>{props.description}</p>
        </div>
    )
}

export default Movie;