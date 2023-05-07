import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


const LandingLayout = () => {
  return (
    <>
    
        <main className="container-fluid">
            <Header />
            <Outlet />
            <Footer />
        </main>
    
    </>
  )
}

export default LandingLayout