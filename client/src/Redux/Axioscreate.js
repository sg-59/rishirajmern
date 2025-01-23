import axios from "axios"

const basicUrl="http://localhost:9000"

const token=JSON.parse(JSON.parse(localStorage.getItem('persist:rishirajProject')).loginData) && JSON.parse(JSON.parse(localStorage.getItem('persist:rishirajProject')).loginData).jwtToken



console.log("where token ????",token);


export const PublicRequest=axios.create({
    baseURL:basicUrl
})

export const SecureRequest=axios.create({
    baseURL:basicUrl,
    headers:{token:token}
})