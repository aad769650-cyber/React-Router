
import { NavLink } from "react-router"
import "./styles.css"


export const Header=()=>{
    return(
        <>
       
            <section className="section">

<div className="offer">
    Check Free Trial of 30Days
    </div>

<div className="Signup">
    <span className="SignIn">Sign In</span>
    <span className="SignUp">Sign Up</span>
</div>



            </section>
       
        {/* <h1>Header</h1> */}
<div className="parent">
    <div>Mahar EduHub</div>
    <ul>
        <li><NavLink to="/" className="nav-item">Home</NavLink></li>
      <li><NavLink to="/about" className={({isActive})=>isActive?`nav-item activeLink`:`nav-item`}>About</NavLink></li>
        <li><NavLink to="/contact" className="nav-item">Contact</NavLink></li>
        <li><NavLink to="/movie" className="nav-item">Movie</NavLink></li>
    </ul>
</div>
        </>
    )
}