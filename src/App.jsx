import { Routes, Route } from 'react-router-dom';

import Navabar from './components/Navbar'
import Footer from './components/Footer'
import Faq from './components/Faq'


import Homepage from './pages/Homepage';
import Kelaspage from './pages/Kelaspage';
import TestimonialPage from './pages/TestimonialPage';
import Faqpage from './pages/Faqpage';
import Syaratketentuan from './pages/Syaratketentuan';


function App() {
  return (
    <div>
      <Navabar/>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/kelas" element={<Kelaspage />} />
          <Route path="/testimonial" element={<TestimonialPage />} />
          <Route path="/Faq" element={<Faqpage />} />
          <Route path="/Syaratketentuan" element={<Syaratketentuan />} />
+        </Routes>

     {/* <Footer/>  */}
    </div>
  );
}

export default App;
