import axios from "axios";
const hostName=process.env.NEXT_PUBLIC_HOST_NAME

const myApi=axios.create({
    baseURL:`${hostName}/api`
})

export default myApi