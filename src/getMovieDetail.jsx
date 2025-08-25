export const getMoviesDetail=async ({params})=>{
    console.log(params,"in movie func");


     const response = await fetch(`https://www.omdbapi.com/?i=${params.Id}&apikey=${import.meta.env.VITE_API_KEY}` );
const data=await response.json();
console.log(data);


return data;
    




}