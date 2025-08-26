import { NavLink } from "react-router"
import "../AppLayout/LAyout/UI/styles.css"

export const Home=()=>{
    return(
        <>
      {/* <div className="Home-image">I am Home Page</div> */}

<div className="home-container">

<div className="home-content">
<div className="home-area">
  <div>
  Explore The Latest in Movie Industries
</div>
<h1>Unlimited Movie,TVs Shows & More</h1>

<p>Discover the top Best Movies and Deamas with catchy subtitle like your Ultimate Guide to Must-Watch Content</p>
<NavLink to="/movie">
<button className="home-btn">Explore Now</button></NavLink>

</div>


</div>
<div className="home-image">
<img src="/movies.png" alt="" />
</div>


</div>






        </>
    )
}