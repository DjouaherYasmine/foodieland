import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Navigation from './Components/navigation';
import Page1 from './Components/page1';
import Page2 from './Components/page2';
import Page3 from './Components/page3';
import Footer from './Components/footer';
import Page4 from './Components/page4';
import Page5 from './Components/page5';

// ------------------------
// Global lazy-loading for all images
// ------------------------
function enableGlobalLazyImages() {
  // Lazy-load images already in the DOM
  document.querySelectorAll('img').forEach(img => {
    img.loading = 'lazy';
  });

  // Lazy-load images added dynamically later
  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      mutation.addedNodes.forEach(node => {
        if (node.tagName === 'IMG') node.loading = 'lazy';
        node.querySelectorAll?.('img').forEach(img => (img.loading = 'lazy'));
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

// Call it once globally
enableGlobalLazyImages();

// ------------------------
// Render your App
// ------------------------
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>  
      <Navigation />
      <Routes>
        <Route path="/" element={<Page1 />} />  
        <Route path="/page2" element={<Page2 />} />  
        <Route path="/page3" element={<Page3 />} />  
        <Route path="/page4" element={<Page4 />} />  
        <Route path="/page5" element={<Page5 />} />  
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
