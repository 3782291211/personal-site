import { Canvas } from '@react-three/fiber';
import Home from './components/Home';
import './index.css';

function App() {
  return (
    <div className="App">
      <Canvas camera={{
        fov: 70
      }} className='home_canvas'>
      <Home/>
      </Canvas>
    </div>
  );
}

export default App;
