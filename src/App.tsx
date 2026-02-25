import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Registration } from './pages/Registration';
import { Membership } from './pages/Membership';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Registration />} />
          <Route path="membership" element={<Membership />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}
