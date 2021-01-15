const API_KEY = "8845fddf6f8b2ae29415e6ea0741bc97";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_networks=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_networks=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_networks=27`,
    fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_networks=10749`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_networks=99`,

}
export default requests;