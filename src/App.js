
import './App.css';
import Banner from './scences/global/Banner';
import NavBar from './scences/global/NavBar';
import AppBar from './scences/global/AppBar';
import { Outlet } from 'react-router-dom';
import Copyright from './scences/global/Copyright';
import Footer from './scences/global/Footer';
import Loading from './components/Loading';
import { Provider } from 'react-redux';
import store from './state/store';
import SelectBox from './components/SelectBox';
import CategorySelect from './components/CategorySelect';
import BrandSelect from './components/BrandSelect';
import FileUpload from './components/FileUpload';
import AdminProductDetail from './admin/scenes/product/AdminProductDetail';

function App() {

  return (
    <div >
      <Provider store={store}>
        <AppBar />
        <div className="container">
          <Banner />
          <NavBar />
          <Outlet />
          <Footer />
          
        </div>

        <Copyright />
      </Provider>
    </div>
  );
}

export default App;
