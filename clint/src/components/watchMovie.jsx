import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/watchmovie.css' 
import axios from 'axios';
const Watch = () => {
    let params=useParams()
    let [movie,setMovie]=useState([])
    
    // axios.get(`http://localhost:3001/movie/${params._id}`)
    useEffect(()=>{
      let fetchdata=async()=>{
        let response=await axios.get(`http://localhost:3001/movie`)
        console.log(response);
        let data=response.data
        setMovie(data)
        
      }
      fetchdata()
    },[])
    let submit=(id)=>{
      movie.filter((x)=>{
        if(x._id==id){
          axios.post('http://localhost:3001/favorite',x).then((res)=>{
            console.log(x);
           alert(res.data.message)
        })
        }
      })
    }
    return ( 
        <div className="mo">
            
                 {movie.map((x)=>{
                    if(x._id==params._id){
                        return(
                              <div className="f">
                            <img src={x.image} alt="" />
                            <div className="f-body">
                              <div className="det">
                              <h4 className='n'>{x.name}</h4>
                            <h5 className='mname'>{x.name}</h5>
                            
                            <p className='des'>{x.description}</p>
                            <h6>{x.Year} &nbsp;&nbsp;&nbsp;{x.RunTime}</h6>
                            <h6></h6>
                             <h5>Directed by:{x.dir}</h5>
                             <h5>{x.gerne}</h5>
                             <button onClick={()=>submit(x._id)}>add to fav</button>
                              </div>
                            
                            </div>
                              </div>
                            
                        )
                    }
                    })}
                    
        </div>
  
     );
}
 
export default Watch;