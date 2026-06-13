
import './App.css';

import Navbar from './Components/Navbar/Navbar';
import MainFirst from './Components/MainFirst/MainFirst';
import Cards from './Components/Cards/Cards';
import Circularcards from './Components/Circularcards/Circularcards';
import Clents from './Components/Clients/Clents';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <MainFirst/>
      <Cards/>
      <Circularcards/>
      <Clents/>
    </div>
    </>
    
  );
}

export default App;
