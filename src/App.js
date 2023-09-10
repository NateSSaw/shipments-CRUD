import { Route, Routes } from 'react-router-dom';

import { lazy } from 'react';
import NotFound from 'pages/NotFound/NotFound';
import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const Shipments = lazy(() => import('./pages/Shipments/Shipments'));
const ShipmentPage = lazy(()=> import('./pages/ShipmentPage/ShipmentPage'))

function App() {
  return (
    <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/shipments" element={<Shipments />} />
              <Route path="/shipments/:id" element={<ShipmentPage />} />  
              <Route path="*" element={<NotFound />} />
          </Route>
     </Routes>
  );
}

export default App;
