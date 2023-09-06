import { Route, Routes } from 'react-router-dom';
import './App.css';
import { lazy } from 'react';
import NotFound from 'pages/NotFound/NotFound';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const Shipments = lazy(() => import('./pages/Shipments/Shipments'));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shipments" element={<Shipments />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
