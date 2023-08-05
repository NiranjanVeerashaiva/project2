import axios from "axios";
import '../css/categories.css'
import { useEffect, useState } from "react";

const Thriller = () => {
let [action,setaction]=useState([])
axios.get('http://localhost:3001/movie')
useEffect(()=>{
let fetchdata=async()=>{
    let response=await axios.get('http://localhost:3001/movie')
    let data=response.data
    let res=data.filter((a)=>a.gerne=="thriller")
    setaction(res)
}
fetchdata()
},[])
    return ( 
        <div className="thriller">
            {action.map((x)=>{
                return(
                    <div className="th">
                        <img src={x.image} alt="" />
                        <h4 className='n'>{x.name}</h4>
                             <div className="ml">
                              <h5>Name:{x.name}</h5>
                             <h5>Director:{x.dir}</h5>
                             <h5>Gerne:{x.gerne}</h5>
                             </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Thriller;