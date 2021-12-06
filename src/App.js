import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import TourManager from "./pages/TourManager";
import UserManager from "./pages/UserManager";
import BookingManager from "./pages/BookingManager";
import Add from "./pages/Add";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/TourManager' element={<TourManager />} />
        <Route path='/UserManager' element={<UserManager />} />
        <Route path='/BookingManager' element={<BookingManager />} />
        <Route path='/Add' element={<Add />} />

      </Routes>
    </Router>
  );
}

export default App;
