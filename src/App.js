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
     <Link to="/">
  <div className="home" >Home</div>
  </Link>
  <Link to="/projects">
  <div className="home" >Projects</div>
  </Link>
  
      <Link to="/about" >
  <div className="home" >About</div>

  </Link>
 


  <Link to="/contact">
  <div className="home" >Contact</div>
  </Link>

  {/* <div className="home" onclick="location.href='index.html'">
    <p>home</p>
  </div>
  <div className="contact" onclick={  <Link to="/contact"></Link>}>
    <p>contact</p>
  </div> */}
    {/* https://dev.to/ridhikgovind/how-to-style-your-react-router-links-using-styled-components-2350 */}
    <Routes>
  <Route  path = '/' element={<Home/>}/>
  <Route  path = '/about' element={<About/>}/>
  <Route   path = '/projects' element={<Projects/>}/>
  <Route  path = '/contact' element={<Contact/>}/>
  </Routes>
  {/* link */}

  



   
   
   
   </div>


  ) 
}

export default App;
