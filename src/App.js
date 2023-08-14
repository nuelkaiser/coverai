import './App.css';
import Home from './Component/Home/Home';
import Sidenav from './Component/sidenav/sidenav';

function App() {
  return (
    <div className="App">
      <Sidenav />
      <Home />
    </div>
  );
}

export default App;
