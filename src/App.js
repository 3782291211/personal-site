import { Canvas } from '@react-three/fiber';
import ProjectSelector from './components/ProjectSelector';
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
          <Route exact path="/" element={<Canvas camera={{fov: 70}} 
          className='home_canvas'>
          <Home/>
          <Route path="/projects" element={<Canvas camera={{fov: 70}} className='home_canvas'>
          <ProjectSelector/>
          </Canvas>}/>
          </Canvas>}/>
          <Route path="/About" element={<Canvas camera={{fov: 70}} 
          className='home_canvas'>
          <About/>
          </Canvas>}/>
      </Routes>
    </div>
  );
}

export default App;
