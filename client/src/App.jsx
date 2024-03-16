import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Register from "./Pages/register";
import ResetPassword from "./Pages/resetPassword";
import Editor from "./Pages/Editor/Editor";
import { Toaster } from 'react-hot-toast';
import Home from "./Pages/Room/Home";
import EditorPage from "./Pages/Room/EditorPage";
import "./App.css";

import Form  from './pages/form'

 export default function App() {
   return (
    <>
    <div>
                <Toaster
                    position="top-right"
                    toastOptions={{
                        success: {
                            theme: {
                                primary: '#4aed88',
                            },
                        },
                    }}
                ></Toaster>
            </div>
     <Router>
       <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/" element={<Home />}></Route>
          <Route path="/editor/:roomId" element={<EditorPage />}></Route>
          <Route path="/interviewer-form" element={<Form/>} />
       </Routes>
     </Router>
</>
   );
  }

