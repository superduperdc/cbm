import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
        key: '972da61e7ac14e0196bfcba84c16c60b'
    }
})