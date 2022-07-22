import React, {useEffect, useState, useCallback} from "react";
import Card from "../UI/Card/Card";
import AddMovie from "./AddMovie/AddMovie";
import classes from './Movies.module.css';
import Movie from "./Movie/Movie";

const Movies = () =>{
    const [errorMsg, setErrorMsg] = useState('');
    const [isLoading, setisLoading] = useState(false);
    const [movieList, setmovieList] = useState([]);

   

    const  fetchMovie = useCallback(async () =>{
        try{
            setisLoading(true);
            let response = await fetch('https://react-movie-1a655-default-rtdb.firebaseio.com/movieList.json');
            if(!response.ok){
                throw new Error('Something went wrong in fetching data!')
            }
            let data = await response.json();
            let movieList = [];
            for(let key in data){
                movieList.push({
                    id: data[key].id,
                    title:data[key].title,
                    description:data[key].description,
                    date:data[key].date
                })
            }
            setmovieList(movieList);

        }
        catch(err){
            setErrorMsg(err.message);
        }
        setisLoading(false);

    },[]);
    useEffect(()=>{
        fetchMovie();
    },[fetchMovie])
   
    const addMovieHandler = async(movie)=>{
        try{
            setisLoading(true);
            let response = await fetch('https://react-movie-1a655-default-rtdb.firebaseio.com/movieList.json',{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(movie)
            })
            if(!response.ok){
                throw new Error('Something went wrong!')
            }
            let data = await response.json();
            let movieList = [];
            movieList.push(movie)
            
        // fetchMovie();
        setmovieList((prevMovie)=>{
            return [...prevMovie, ...movieList]
        });

        }
        catch(err){
            setErrorMsg(err.message);
        }
        setisLoading(false);
       
    }
    return(
        <>
            <Card>
                <p className={classes.errorMsg}>{errorMsg}</p>
                <AddMovie addMovie={addMovieHandler}></AddMovie>
            </Card>
            <Card>
                {isLoading && <p>Loading</p>}
                {movieList.map((movie)=>{
                    return <Movie title={movie.title} description={movie.description} key={movie.id}/>
                })}
            </Card>
        </>
    )
}

export default Movies;