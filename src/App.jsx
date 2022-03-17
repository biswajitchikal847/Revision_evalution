
import './App.css';
import { Home } from './components/Home';
import { MoviesDashboard } from './components/MoviesDashboard';
import { Navbar } from './components/Navbar';
import { Route, Routes} from 'react-router-dom'
import { SingleMovieDetails } from './components/SingleMovieDetails';
function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route  path="/" element={<Home />} > </ Route>

    <Route  path="/movies" element={<MoviesDashboard />} >  </ Route>
    <Route  path="/movies/:id" element={<SingleMovieDetails />} >  </ Route>
    </Routes>
    
    </>
  );
}

export default App;
