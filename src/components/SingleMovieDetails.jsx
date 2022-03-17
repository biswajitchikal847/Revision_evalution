import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const SingleMovieDetails = () => {
  const {id} = useParams()
 const [product, setproduct] = useState([]);
 const [loading, setLoading] = useState(false)

    // make a request to get the details
   useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const res = await fetch(`https://movie-fake-server.herokuapp.com/data/${id}`)
      setproduct(await res.json())
      setLoading(false)
    }


     getProduct();
   }, [])

const ShowMovie =() => {
  return (
    <>
      <div className="col-md-6">
      <div class="card" key = {product.id}>
        <img src = {product.image_url} alt="movie_poster" />
  <div class="card-body">
  <h5 class="card-title">{product.movie_name}</h5>
    <p class="card-text"> Type :- {product.genre}</p>
    <p class="card-text">Rating {product.rating}</p>
    
  </div>
</div>

      </div>
    </>
  )

}

  return (
  <>
  <div>
    <div className="container">
      <div className="row"> 

      {loading ? "Loading..." : <ShowMovie />}

      </div>

    </div>
  </div>
  </>
  )
};
