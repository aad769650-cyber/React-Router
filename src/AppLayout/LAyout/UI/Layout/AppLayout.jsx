import { Outlet, useNavigation } from "react-router"
import { Footer } from "../Footer"
import { Header } from "../Header"
import { Loading } from "../../../../Pages/Loading"

export const AppLayout=()=>{

const navigation=useNavigation()
console.log(navigation);

if(navigation.state==="loading")return <Loading></Loading> 



    return(
        <>
        <Header ></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
}