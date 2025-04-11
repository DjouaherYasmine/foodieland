import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navigation from './Components/navigation';
import Page1 from './Components/page1';
import Page2 from './Components/page2';
import Page3 from './Components/page3';
import Footer from './Components/footer';
import Page4 from './Components/page4';
import Page5 from './Components/page5';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>  {/* Add Router here */}
      <Navigation />
      <Routes>
        <Route path="/" element={<Page1 />} />  {/* Home (Page1) */}
        <Route path="/page2" element={<Page2 />} />  {/* Recipes (Page2) */}
        <Route path="/page3" element={<Page3 />} />  {/* Recipes (Page3) */}
        <Route path="/page4" element={<Page4 />} />  {/* Recipes (Page3) */}
        <Route path="/page5" element={<Page5 />} />  {/* Recipes (Page3) */}

      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
