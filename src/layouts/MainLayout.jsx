import { Outlet } from 'react-router-dom'; 
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import BackToTop from '../components/layout/BackToTop';
import ScrollToTop from '../components/layout/ScrollToTop';

function MainLayout() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default MainLayout;