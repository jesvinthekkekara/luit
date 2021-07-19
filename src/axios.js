//  every request I am sending should start with same URL      here https://api.themoviedb.org/3

import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

//  instance.get ('/foo-bar');   gives you https://api.themoviedb.org/3/foo-bar

export default instance;
