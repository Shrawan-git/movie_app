import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
     <h1>Hello world</h1>
    <Row title = "NETFLEX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
    <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
