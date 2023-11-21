import axios from "axios";

const myApi=axios.create({
    baseURL:'/api'
})

export default myApi