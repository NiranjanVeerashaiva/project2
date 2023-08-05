import { useEffect, useState } from 'react';

import '../css/movie.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Movie = () => {
  let [movie,setMovie]=useState([])
  axios.get('http://localhost:3001/movie')
  useEffect(()=>{
    let fetchdata=async()=>{
      let response=await axios.get('http://localhost:3001/movie')
      console.log(response);
      let data=response.data
      setMovie(data)
    }
    fetchdata()
  },[])

  
    return ( 

        <div className="movie1">
                 <h2>Movies</h2>
                 
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src="https://www.livemint.com/lm-img/img/2023/05/08/600x338/Kerala_Story_1683096659208_1683534031098.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://static.toiimg.com/photo/96873817/size-161330/96873817.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img src="https://timesofindia.indiatimes.com/photo/99722979.jpeg" class="d-block w-100" alt="..."/> 
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
                      </div>
                <div className="movlist">
                    <h3><span style={{color:"blue"}}>prime</span> movies</h3> <br />
                    <div className="movielistss">
                    {movie.map((x)=>{
                        return(
                          <div className="mov">
                           
                           <Link to={`/watch/${x._id}`}> <img src={x.image} alt="" /></Link>
                             <h4 className='n'>{x.name}</h4>
                          </div>                    
                        )
                      })}
                    </div>
                     
                    

                </div>
        </div>

       
     );
}
 
export default Movie;