import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        {/* We'll add routes for Crew and Technology later */}
      </Route>
    </Routes>
  );
}

export default App;