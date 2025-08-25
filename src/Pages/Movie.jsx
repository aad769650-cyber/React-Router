// import { useLoaderData } from "react-router"

import { useLoaderData } from "react-router"
import { MovieCard } from "./MovieCard";
import "../AppLayout/LAyout/UI/styles.css"

// export const Movie=()=>{
    
//     const apiData=useLoaderData()
//     console.log(apiData);
    
    
//     return(
//         <>
//         <h1>Hello I am Movie Page</h1>
//         </>
//     )
// }

// import { useLoaderData } from "react-router-dom";


// export const Movie = () => {
//   const moviesData = useLoaderData();
//   console.log(moviesData);

 
// };



export const Movie=()=>{
   
   const resData=useLoaderData()
   console.log(resData);
   
    return(
        <>
        
        <ul className="Movie-Ul">
            {
                resData.Search.map((curr)=>{
                 return(  
                     <MovieCard key={curr.imdbId} value={curr}></MovieCard>
                 )
                    
                })
            }
        </ul>
        </>
    )
}