import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import ProjectDetail from './components/ProjectDetail';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/thuk-thay" element={<ProjectDetail project="thuk-thay" />} />
          <Route path="/world-traveler" element={<ProjectDetail project="world-traveler" />} />
          <Route path="/stem-mies" element={<ProjectDetail project="stem-mies" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
