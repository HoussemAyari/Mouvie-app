import './App.css';
import {movies} from './components/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Searchbar from './components/Searchbar';
import {useState} from "react"
import AddFilm from './components/AddFilm';
  


function App() {
 const [films,setFilms]=useState(movies);
 const [search,setSearch]=useState('')
 const searchForFilm=(input)=>{
  setSearch(input)
 }
  return (

    <div className="App">
    <Searchbar searchForFilm={searchForFilm} />
    <AddFilm />
     <List films={films} search={search} />
    </div>
  );
}

export default App;
