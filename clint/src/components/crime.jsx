import axios from "axios";
import '../css/categories.css'
import { useEffect, useState } from "react";

const Crime = () => {
let [action,setaction]=useState([])
axios.get('http://localhost:3001/movie')
useEffect(()=>{
let fetchdata=async()=>{
    let response=await axios.get('http://localhost:3001/movie')
    let data=response.data
    let res=data.filter((a)=>a.gerne=="crime")
    setaction(res)
}
fetchdata()
},[])
    return ( 
        <div className="crime">
            {action.map((x)=>{
                return(
                    <div className="cr">
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
 
export default Crime;