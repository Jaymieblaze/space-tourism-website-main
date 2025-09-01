import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Destination from './pages/Destination';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        {/* We'll add routes for Crew and Technology later */}
      </Route>
    </Routes>
  );
}

export default App;