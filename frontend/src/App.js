
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Detail from './Pages/Detail';

import Register from './Pages/HotelTable';
import SignUpLogin from './Pages/SignupLogin';
import WorkForm from './Pages/WorkForm';
import HotelTable from './Pages/HotelTable';


function App() {
  

  return (

    <div className="App">
      
      <Routes>
      <Route path="/" element={<SignUpLogin />} />
      {/* <Route path="/login" element={<SignUpLogin />} /> */}
      <Route path="/work" element={<WorkForm/>} />
      <Route path="/register" element={<HotelTable/>} />
      <Route path="/Detail" element={<Detail/>} />



      </Routes>
      {/* <Footer/> */}
      {/* <Aish/> */}
      
    </div>
  );
}

export default App;
