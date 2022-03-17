import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const genres = ["Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    
    const getMovies = async () => {
      setLoading(true);
      const res = await fetch("https://movie-fake-server.herokuapp.com/data")
       if(componentMounted){
         setData(await res.clone().json());
         setFilter(await res.json());
         setLoading(false)
         console.log(filter)
       }

       return () => {
         componentMounted = false;

       }

    }

    getMovies();
  }, [])

  const Loading = () => {
    return (
      <>
      Loading.....
      </>
    )
  }


  const Showmovies = () => {
    return (
      <>
      
      </>
    )

  }
    // to get all movies list on component mounts
  // useEffect(() => {
  //   //   dispatch an action to the store 

  // }, [dispatch]);


//    filter by genre 
// const handleFilter = (e)=>{
//     setFilter(data.e.target.value)
// }

const handleFilter = (e) => {
  const updatelist = data.filter((x) => x.genre == e);
  setFilter(updatelist)
}

  return (
    <>
      <h2>Movies</h2>
      <>
      {/* <select  onChange={handleFilter}> */}
        <button onClick={() => setFilter(data)} >ALL</button>
        <button onClick={() => handleFilter("Drama")}>Drama</button>
        <button onClick={() => handleFilter("Adventure")}>Adventure</button>
        <button onClick={() => handleFilter("Comedy")}>Comedy</button>
        <button onClick={() => handleFilter("Documentary")}> Documentary</button>
      {/* </select> */}

      {filter.map((movie) => {
   
   return (
      <>
      <div className = "movies-list col-md-3">
        <div class="card" key = {movie.id}>
        <img src = {movie.image_url} alt="movie_poster" />
  <div class="card-body">
  <h5 class="card-title">{movie.movie_name}</h5>
    <p class="card-text"> Type :- {movie.genre}</p>
    <p class="card-text">Rating {movie.rating}</p>
    <Link to={`/movies/${movie.id}`} class="btn btn-primary">Go To description</Link>
  </div>
</div>

      
       </div>
       </>
      )
})}
      </>
    </>
  );
};
