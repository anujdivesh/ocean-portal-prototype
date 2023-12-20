import './App.css';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Services from './pages/services';
import SignUp from './pages/signup';

function App() {
  return (
    <Router>
    <Routes>
      <Route path='/pop/services' element={<Services/>} />
      <Route path='/pop/product' element={<SignUp/>} />
      <Route path="/pop" element={<Navigate replace to="/pop/services" />} />
      <Route path="/" element={<Navigate replace to="/pop/services" />} />
    </Routes>
  </Router>
  );
}

export default App;
