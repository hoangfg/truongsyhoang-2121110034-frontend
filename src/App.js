
import './App.css';
import Banner from './scences/global/Banner';
import NavBar from './scences/global/NavBar';
import AppBar from './scences/global/AppBar';
import { Outlet } from 'react-router-dom';
import Copyright from './scences/global/Copyright';
import Footer from './scences/global/Footer';
import Loading from './components/Loading';

function App() {
  return (
    <div >
      <AppBar />
      <div className="container">
        <Banner />
        <NavBar />
        <Outlet />
        <Footer />
      </div>
      
      <Copyright />
    </div>
  );
}

export default App;
