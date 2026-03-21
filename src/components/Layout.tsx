import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="layout-wrapper">
      <Navbar />
      <main 
        className="container" 
        style={{ 
          paddingTop: isHome ? '0' : '4rem',
          paddingBottom: '4rem',
          paddingLeft: '2rem',
          paddingRight: '2rem'
        }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};


export default Layout;
