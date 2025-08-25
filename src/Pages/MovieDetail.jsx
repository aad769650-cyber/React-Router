import { NavLink, useLoaderData, useParams } from "react-router"
import "../AppLayout/LAyout/UI/styles.css"
export const MovieDetail=()=>{
    const params=useParams()
    console.log(params,"lok");

    const data=useLoaderData()
    console.log(data,"data");
const {Poster,Title,Year}=data;    
    return(
        <>
       <ul className="Movie-Ul">
          <li className="card-container">

<div className="image">
    <figure>
        <img src={Poster} alt="Movies Poster" />
    </figure>
</div>
<div className="info">
    <div className="title">Title:{Title}</div>
<div className="Year">Year:{Year}</div>

</div> 

    <button className="btn">Watch Now</button>


</li>
       </ul>

</>
    )
}