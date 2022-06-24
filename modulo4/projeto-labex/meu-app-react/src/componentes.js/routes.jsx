import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage.js';
import ListTripsPage  from './ListTripsPage';
import ApplicationFormPage  from './ApplicationFormPage';
import LoginPage  from './LoginPage';
import AdminHomePage  from './AdminHomePage.js';
import TripDetailsPage  from './TripDetailsPage.js';


export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trips/list" element={<ListTripsPage />} />
        <Route path="/trips/application" element={<ApplicationFormPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/trips/list" element={<AdminHomePage />} />
        <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
        <Route path="/admin/trips/create" element={<TripDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
