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
import ManageOrders from './pages/Dashbord/ManageOrders';
import ManageProducts from './pages/Dashbord/ManageProducts';
import Blog from './pages/Blog';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import WhyUs from './pages/Home/WhyUs';


function App() {


  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/portfolio" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/products" element={<ProductPage></ProductPage>}></Route>
        <Route path="/about" element={<WhyUs></WhyUs>}></Route>
        <Route path="/product/:id" element={<RequireAuth><Purchese></Purchese></RequireAuth>}></Route>
        <Route path="/payment/:id" element={<RequireAuth><Payment></Payment></RequireAuth>}></Route>

        <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<RequireAuth><MyProfile></MyProfile></RequireAuth>} />
          <Route path='addReview' element={<RequireAuth><AddReview></AddReview></RequireAuth>} />
          <Route path='addProducts' element={<RequireAdmin><AddProducts></AddProducts></RequireAdmin>} />
          <Route path='orders' element={<RequireAuth><MyOrder></MyOrder></RequireAuth>} />
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>} />
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders></ManageOrders></RequireAdmin>} />
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>} />

        </Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>

      <Footer></Footer>
      <ToastContainer />

    </div>
  );
}

export default App;
