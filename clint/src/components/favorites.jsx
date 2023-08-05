import axios from "axios";
import '../css/categories.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Favorites = () => {
    let params=useParams()
let [favorite,setfav]=useState([])
axios.get('http://localhost:3001/favMovie')
useEffect(()=>{
let fetchdata=async()=>{
    let response=await axios.get('http://localhost:3001/favMovie')
    let data=response.data
    
    setfav(data)
}
fetchdata()
},[])

// let submit=()=>{
//     favorite.filter((x)=>{
       
//           axios.delete('http://localhost:3001/favoritedelete',x).then((res)=>{
//             console.log(x);
//            alert(res.data.message)
//         })
        
//       })

// }
let submit=(id)=>{
    let res=favorite.filter((a)=>a._id!==id)
    setfav(res)
}


    return ( 
        <div className="crime">
            {favorite.map((x)=>{
                return(
                    <div className="cr">
                        <img src={x.image} alt="" />
                        <h4 className='n'>{x.name}</h4>
                             <div className="ml">
                              <h5>Name:{x.name}</h5>
                             <h5>Director:{x.dir}</h5>
                             <h5>Gerne:{x.gerne}</h5>
                             <button onClick={()=>submit(x._id)} >remove from fav</button>
                             </div>
                    </div>
                )
            })}
        </div>
     );
}
 
export default Favorites;