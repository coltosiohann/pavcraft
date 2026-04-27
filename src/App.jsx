import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Projects from './pages/Projects';
import Quality from './pages/Quality';
import CatalogPDF from './pages/CatalogPDF';
import Contact from './pages/Contact';
import QuoteRequest from './pages/QuoteRequest';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/"                     element={<Home />} />
          <Route path="/despre-noi"           element={<About />} />
          <Route path="/produse"              element={<Products />} />
          <Route path="/produse/:id"          element={<ProductDetails />} />
          <Route path="/proiecte"             element={<Projects />} />
          <Route path="/certificate-calitate" element={<Quality />} />
          <Route path="/catalog-pdf"          element={<CatalogPDF />} />
          <Route path="/contact"              element={<Contact />} />
          <Route path="/cerere-oferta"        element={<QuoteRequest />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
