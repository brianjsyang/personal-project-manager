import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Header from './components/layouts/Header';
import AddProjectFunc from './components/projects/AddProjectFunc';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/addProject" element={<AddProjectFunc />} />
      </Routes>
    </div>
  );
}

export default App;
