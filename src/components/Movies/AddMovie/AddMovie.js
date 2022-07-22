import React, { useRef } from 'react';
import classes from './AddMovie.module.css';

const AddMovie = (props)=>{
    const nameRef = useRef();
    const descRef = useRef();
    const dateRef = useRef();
    const addMovie = (e)=>{
        e.preventDefault();
        let movie={
            id: Math.random(),
            title:nameRef.current.value,
            description:descRef.current.value,
            date:dateRef.current.value
        }
        props.addMovie(movie);
        //Bad we should not update ref
        nameRef.current.value='';
        descRef.current.value='';
        dateRef.current.value='';
    }

    return(
        <div className={classes['form_wrapper']}>
            <form onSubmit={addMovie}>
                <div className={classes.controls}>
                    <label htmlFor='name'>Title</label>
                    <input type="text" name="title" ref={nameRef}/>
                </div>
                <div className={classes.controls}>
                    <label htmlFor='desc'>Description</label>
                    <textarea ref={descRef}/>
                </div>
                <div className={classes.controls}>
                    <label htmlFor='date'>Date</label>
                    <input type="date" name="date" ref={dateRef} />
                </div>
                <button type='submit'>Add Movie</button>
            </form>
        </div>
    )
}
export default AddMovie