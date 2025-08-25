// export const getMoviesData = async () => {
//   try {
//     const response = await fetch(
//       `https://www.omdbapi.com/?i=tt3896198&apikey=29264934&s=titanic&page=1`
//     );
//     const data = response.json();
//     return data;
//   } catch (error) {
//     console.log(error,"lok");
//   }
// };


export const getMoviesData=async ()=>{
 
    //this api is present in env file to secure data;
    
 const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1` );
const data=await response.json();


return data
}