import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import ResetPassword from "./pages/resetPassword";
import LandingPage from "./pages/landingPage";
import AboutUs from "./components/landingpage/AboutUs";

 export default function App() {
   return (
     <Router>
       <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         <Route path="/reset-password" element={<ResetPassword />} />
         <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
       </Routes>
     </Router>

   );
  }

