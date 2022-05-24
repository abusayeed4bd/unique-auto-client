import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Home/Login';
import SignUp from './pages/Home/SignUp';
import Footer from './pages/Shared/Footer';
import Dashboard from './pages/Dashbord/Dashboard';
import MyProfile from './pages/Dashbord/MyProfile';
import AddReview from './pages/Dashbord/AddReview';
import MyOrder from './pages/Dashbord/MyOrder';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}>
          <Route index element={<MyProfile></MyProfile>} />
          <Route path='addReview' element={<AddReview></AddReview>} />
          <Route path='orders' element={<MyOrder></MyOrder>} />
        </Route>
      </Routes>

      <Footer></Footer>

    </div>
  );
}

export default App;
