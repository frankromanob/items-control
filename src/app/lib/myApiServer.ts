import axios from "axios";
const hostName=process.env.HOST_NAME

const myApiServer=axios.create({
    baseURL:`${hostName}/api`
})

export default myApiServer