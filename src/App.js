
import './App.css';
import Navbar from './Components/Navbar';
import BackgroundVideo from './Components/BackgroundVideo';
import { AllRoutes } from './Components/AllRoutes';
import SignupPage from './Components/SignupPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      {/* <SignupPage/> */}
    </div>
  );
}

export default App;
