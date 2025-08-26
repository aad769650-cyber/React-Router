// import { createBrowserRouter, createRoutesFromElements, Route } from "react-router"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./Pages/Home"
import { Contact } from "./Pages/Contact"
import { About } from "./Pages/About"
import { Movie } from "./Pages/Movie"
import { AppLayout } from "./AppLayout/LAyout/UI/Layout/AppLayout"
import { ErrorPage } from "./AppLayout/LAyout/UI/ErrorPage"
import { getMoviesData } from "./api/GetApiData"
import { MovieDetail } from "./Pages/MovieDetail"
import { getMoviesDetail } from "./getMovieDetail"
import { getContactData } from "./Pages/getContactData"

const App=()=>{

// const router=createBrowserRouter(
//   [
//     {
// path:"/",
// element:<AppLayout></AppLayout>,
// children:[
//    {
// path:"/",
// element:<Home></Home>
//     },
//     {
// path:"/about",
// element:<About></About>
//     },
//     {
// path:"/movie",
// element:<Movie></Movie>
//     },
//     {
// path:"/contact",
// element:<Contact></Contact>
//     }
// ]

//     },
   
//   ]
// )

// const router=createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route path="/" element={<Home></Home>}></Route>
//       <Route path="/contact" element={<Contact></Contact>}></Route>
//       <Route path="/about" element={<About></About>}></Route>
//       <Route path="/movie" element={<Movie></Movie>}></Route>
//     </Route>
//   )
// )




// return(
//   <>
//   {/* <h1>Hello From React Router</h1> */}
//   <RouterProvider router={router}></RouterProvider>
//   </>
// )




const router =createBrowserRouter(
  [
    {
      path:"/",
      element:<AppLayout></AppLayout>,
      errorElement:<ErrorPage></ErrorPage>,

children:[
  {
    path:"/about",
    element:<About></About>,
  },

  {
    path:"/contact",
    element:<Contact></Contact>,
    action:getContactData,
  },
  {
    path:"/",
    element:<Home></Home>,
  },
  {
    path:"/movie",
    element:<Movie></Movie>,
    loader:getMoviesData,
  },
  {
path:"/movie/:Id",
element:<MovieDetail/>,
loader:getMoviesDetail,

  },

]




    }
  ]
)



return(
  <>
  <RouterProvider router={router}></RouterProvider>
  </>
)
}
export default App