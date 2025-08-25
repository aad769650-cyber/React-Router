import { NavLink } from "react-router";
import "../AppLayout/LAyout/UI/styles.css"
export const MovieCard=(props)=>{
    console.log(props);
    const {Title,Year,Poster,imdbID}=props.value
    console.log(imdbID);
    
    return(
        <>
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
<NavLink to={`/movie/ ${imdbID}`}>

<button className="btn">Watch Now</button>
</NavLink>
      </li>
        </>
    )
}