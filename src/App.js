import { Canvas } from '@react-three/fiber';
import ProjectSelector from './components/ProjectSelector';
import { Home } from './components/Home';
import { Navigation } from './components/Navigation';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import { About } from './components/About';

function App() {
  return (<div className="App">
      <Navigation/>
      <Canvas camera={{fov: 70}} className='home_canvas'>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/projects" element={<ProjectSelector/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Canvas>
    </div>);
}

export default App;
