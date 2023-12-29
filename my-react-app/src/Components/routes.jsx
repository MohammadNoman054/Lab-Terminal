import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import DetailsPage from './DetailsPage';

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/DetailsPage" element={<DetailsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
