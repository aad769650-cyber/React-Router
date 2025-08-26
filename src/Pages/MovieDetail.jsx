import { NavLink, useLoaderData, useNavigate, useParams } from "react-router"
import "../AppLayout/LAyout/UI/styles.css"
export const MovieDetail=()=>{
    const params=useParams()
    console.log(params,"lok");
const navigate=useNavigate();
    const data=useLoaderData()
    console.log(data,"data");
const {Poster,Title,Year,Type,imdbRating,Runtime,Plot,Awards,BoxOffice}=data; 
console.log(imdbRating);

const runtime=Runtime.replace("min","")
const hours=Math.floor(runtime/60);
const min=runtime%60;
const formatedTime=`${hours}hr ${min}min`
console.log(hours,min);

const handleClick=()=>{

    navigate(-1)
}




    return(
        <>
       <ul className="SingleMovie-Ul">
          <li className="card-container">

<div className="image">
    <figure>
        <img src={Poster} alt="Movies Poster" />
    </figure>


    <button className="btn">Watch Now</button>
</div>


</li>

<div className="Movie-info">
<div className="mainHead">
    <div className="movieName">
        <div className="title">{Title}</div>
<div className="icons">
<div className="type">{Type}</div>
<div className="Year">{Year}</div>
</div>
    </div>


<div className="Plot">{Plot}</div>


<div className="Awards">
Awards:{Awards}
</div>
<div className="movieCollection">
    <div className="rating">Ratings:{imdbRating}</div>
    <div className="time">{formatedTime}</div>
    <div className="BoxOffice">{BoxOffice}</div>
</div>
<button onClick={handleClick} className="card-btn">Go Back</button>
</div>
</div>

{/* <aside className="Collection">
  <div className="aside">  $456789</div>
</aside> */}
       </ul>

</>
    )
}