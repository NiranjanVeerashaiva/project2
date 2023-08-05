import { useRef } from "react";
import '../css/addmovie.css'
import axios from "axios";
const Addmovie = () => {
    let name=useRef("")
    let dir=useRef("")
    let image=useRef("")
    let gerne=useRef("")
    let description=useRef("")

    let submit=(a)=>{
        a.preventDefault()
        let data={name:name.current.value,dir:dir.current.value,image:image.current.value,gerne:gerne.current.value,description:description.current.value}
        axios.post('http://localhost:3001/addmovie',data).then((res)=>{
            alert(res.data.message)
        })
    }
    return ( 
        <div className="addmovie">
                 <form action="" onSubmit={submit}>
            <input type="text" ref={name} placeholder="movie name" />
            <input type="text" ref={dir} placeholder="director name" />
            <input type="imageURL" ref={image} placeholder="imageurl" />
            <input type="text" ref={gerne} placeholder="enter gerne" />
            <input type="text" ref={description} placeholder="description"/>
            <button>add movie</button>
        </form>
        </div>
       
     );
}
 
export default Addmovie;