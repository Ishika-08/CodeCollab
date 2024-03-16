import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import ResetPassword from "./pages/resetPassword";
import Editor from "./Pages/Editor/Editor";
import Form  from './pages/form'

 export default function App() {
   return (
     <Router>
       <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/interviewer-form" element={<Form/>} />
       </Routes>
     </Router>

   );
  }

