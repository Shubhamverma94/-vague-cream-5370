
import './App.css';
import Navbar from './Components/Navbar';
import BackgroundVideo from './Components/BackgroundVideo';
import { AllRoutes } from './Components/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BackgroundVideo />
      
      <AllRoutes />
    </div>
  );
}

export default App;
