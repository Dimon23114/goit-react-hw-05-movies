import axios from "axios"

const key = "ebbe35c403505b73402aab89ea6ff528"

export const fetchCast = (id) => {
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`)
} 