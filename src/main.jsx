import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navigation from './Components/navigation';
import Page1 from './Components/page1';
import Page2 from './Components/page2';
import Footer from './Components/footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>  {/* Add Router here */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Page1 />} />  {/* Home (Page1) */}
        <Route path="/page2" element={<Page2 />} />  {/* Recipes (Page2) */}
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
