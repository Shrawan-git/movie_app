import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="app">
     <Banner />


    <Row title = "NETFLEX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true}/>
    <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
    <Row title = "Top Rated" fetchUrl={requests.fetchTopRated}/>
    <Row title = "Acion Movies" fetchUrl={requests.fetchActionMovies}/>
    <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
    <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row title = "Romance Movies" fetchUrl={requests.fetchRomanticMovies}/>
    <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>


    </div>
  );
}

export default App;
