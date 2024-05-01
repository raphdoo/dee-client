import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Landing />} exact />
          <Route path="/bot" element={<Dashboard />} exact />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
