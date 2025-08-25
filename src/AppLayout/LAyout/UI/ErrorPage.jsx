import { NavLink, useNavigate, useRouteError } from "react-router"
import "./styles.css"

export const ErrorPage=()=>{


  
  
  const error=useRouteError();
  
  const navigate=useNavigate()
  console.log(navigate);
  

  
  const handleGoBack=()=>{
    navigate(-1)
  }
  
  console.log(error);
  
  
  
  
  if(error.status===404){
    return (
           <div className="errorPage">



            <div className="figure">
                <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />

          </figure>
          
          <div className="para-div">
            <p>The Page you looking for does not found...</p>
          </div>
{/*           
          <div><NavLink to="/" className="homePage">Go Back to Home Page</NavLink></div> */}
          <button className="homePage" onClick={handleGoBack}>Go Back </button>
          </div>
           </div>
    )
}


return <h1>This Page does not Exist</h1>
}