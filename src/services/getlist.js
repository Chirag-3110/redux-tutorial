export const getUsersList=()=>{
    return new Promise(async(resolve,reject)=>{
        return await fetch('https://jsonplaceholder.typicode.com/photos')
        .then((res)=>res.json())
        .then((data)=>{
            resolve({data:data,error:false})
        })
        .catch((error)=>{
            reject({data:error,error:true})
        })
    })
}