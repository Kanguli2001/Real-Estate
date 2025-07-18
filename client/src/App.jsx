import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';

export default function App() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/about" element={<About />} />
  </Routes>
  </BrowserRouter>
}
