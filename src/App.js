import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login';
import SignUp from './pages/Home/SignUp';
import Footer from './pages/Shared/Footer';
import Dashboard from './pages/Dashbord/Dashboard';
import MyProfile from './pages/Dashbord/MyProfile';
import AddReview from './pages/Dashbord/AddReview';
import MyOrder from './pages/Dashbord/MyOrder';
import NotFound from './pages/NotFound/NotFound';
import RequireAuth from './hooks/RequireAuth';
import Purchese from './pages/Purchese';
import AddProducts from './pages/Dashbord/AddProducts';
import Users from './pages/Dashbord/Users';
import MyPortfolio from './pages/MyPortfolio/MyPortfolio';
import RequireAdmin from './hooks/RequireAdmin';
import Payment from './pages/Dashbord/Payment';
import ProductPage from './pages/ProductPage';


function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/products" element={<ProductPage></ProductPage>}></Route>
        <Route path="/product/:id" element={<RequireAuth><Purchese></Purchese></RequireAuth>}></Route>
        <Route path="/payment/:id" element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>

        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<RequireAuth><MyProfile></MyProfile></RequireAuth>} />
          <Route path='addReview' element={<RequireAuth><AddReview></AddReview></RequireAuth>} />
          <Route path='addProducts' element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>} />
          <Route path='orders' element={<RequireAuth><MyOrder></MyOrder></RequireAuth>} />
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>} />

        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>
      <ToastContainer />

    </div>
  );
}

export default App;
