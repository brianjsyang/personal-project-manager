import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Header from './components/layouts/Header';
import AddProject from './components/projects/AddProject';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/addProject" element={<AddProject />} />
      </Routes>
    </div>
  );
}

export default App;
