import './App.css';
import { Route, Router } from 'react-router-dom';
import HomePage from './pages/homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <div className="routecontainer">
            <Route path="/" element={<HomePage/>}/>
          </div>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
