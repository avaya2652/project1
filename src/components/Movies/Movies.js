import React, {useEffect, useState, useCallback} from "react";
import Card from "../UI/Card/Card";
import AddMovie from "./AddMovie/AddMovie";
import classes from './Movies.module.css';
import Movie from "./Movie/Movie";
import useHttp from "../../hook/uee-http";

const Movies = () =>{
    // const [errorMsg, setErrorMsg] = useState('');
    // const [isLoading, setisLoading] = useState(false);
    const [movieList, setmovieList] = useState([]);
let addedMovie = [];
    
    // let fetchDataConfig = useMemo(()=> {return {
    //     URL:'https://react-movie-1a655-default-rtdb.firebaseio.com/movieList.json'
    // }},[])

const fetchData =useCallback((data) =>{
    console.log(data)
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
},[])

    const movieAddedData = (d) =>{
        setmovieList((prevMovie)=>{
                return [...prevMovie, ...addedMovie]
            });
    }
    const {isLoading:isLoading1, errorMsg:errorMsg1, sendRequest} = useHttp( fetchData);
    const {isLoading, errorMsg, sendRequest:addMovie} = useHttp( movieAddedData);

    
    useEffect(()=>{
        let config = {
            URL:'https://react-movie-1a655-default-rtdb.firebaseio.com/movieList.json'
        }
        sendRequest(config)
    },[sendRequest])
   
    const addMovieHandler = async(movie)=>{
        let addDataConfig ={
            URL:'https://react-movie-1a655-default-rtdb.firebaseio.com/movieList.json',
            headers:{'Content-Type':'application/json'},
            method:'POST',
            body:movie
        }
        addMovie(addDataConfig);
        addedMovie = [];
        addedMovie.push(movie);
   
    }
    return(
        <>
            <Card>
                {errorMsg &&<p className={classes.errorMsg}>{errorMsg}</p>}
                { errorMsg1 &&<p className={classes.errorMsg}>{errorMsg1}</p>}
                <AddMovie addMovie={addMovieHandler}></AddMovie>
            </Card>
            <Card>
                {(isLoading1 || isLoading) && <p>Loading</p>}
                {movieList.map((movie)=>{
                    return <Movie title={movie.title} description={movie.description} key={movie.id}/>
                })}
            </Card>
        </>
    )
}

export default Movies;