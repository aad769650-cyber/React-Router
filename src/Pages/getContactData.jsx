export const getContactData=async ({request})=>{
const req=await request.formData();
const data=Object.fromEntries(req);

console.log(data);

    return null;
}
