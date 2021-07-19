 const API_KEY="4b9df35cec0a2b037c91bf637cf597fc";

 const requests = {
     fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
     fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
     fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
     fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
     fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`,
    

 } //done to make it easy OR you have to do it at all places , you could see it on App.js fetchUrl part
 export default requests;