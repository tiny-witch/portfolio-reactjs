import logo from './logo.svg';
import './App.css';
import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About  from './Pages/About';
import Projects from './Pages/Projects';
// import ToggleGroup from './Pages/Projects';
import {Route, Routes, Link
} from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
    {/* https://dev.to/ridhikgovind/how-to-style-your-react-router-links-using-styled-components-2350 */}
    <Routes>
  <Route  path = '/' element={<Home/>}/>
  <Route  path = '/about' element={<About/>}/>
  <Route   path = '/projects' element={<Projects/>}/>
  <Route  path = '/contact' element={<Contact/>}/>
  </Routes>
  {/* link */}
  <Link to="/about">About</Link>
  <Link to="/">Home</Link>
  <Link to="/projects">Projects</Link>
  <Link to="/contact">Contact</Link>
  {/* data toggle */}
  {/* <ToggleGroup /> */}
  <h1></h1>

   
   
   
   </div>


  ) 
}

export default App;
