import Analytics from './Pages/Analytics';
import Settings from './Pages/Settings';
import Notifications from './Pages/Notifications';
import Users from './Pages/Users';
import Messages from './Pages/Messages';
import Integrations from './Pages/Integrations';
import Reports from './Pages/Reports';

import Facebook from './Pages/Facebook';
import Instagram from './Pages/Instagram';
import Telegram from './Pages/Telegram';




import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './Layouts/MainLayout';
import LoginLayouts from './Layouts/LoginLayouts';
import RegisterLayout from './Layouts/RegisterLayout';
import DashboardLayout from './Layouts/DashbaordLayout';
import ForgetPSLayout from './Layouts/FogetPSLayout';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import BlogDetail from './Components/BlogDetail';
import AddBlog from './Components/AddBlog';
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Homee from './Pages/Homee';
import Posts from './Pages/Posts';
import Chat from './Pages/Chat';
import Inbox from './Pages/Inbox';
import Logout from './Pages/Logout';
import Login from './Pages/Login';
import Register from './Pages/Register';
import ForgetPassword from './Pages/ForgetPassword';
import Blogs from './Pages/dashboardPages/Blogs';



function App() {
  const [blogs, setBlogs] = useState(Blogs)

  const handleAddBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
  };

  return (
    <Router>
      <Routes>

        {/* Website Pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog blogs={blogs} onAdd={handleAddBlog} />} />
          <Route path="/blog/:id" element={<BlogDetail blogs={blogs} />} />
          <Route path="/write-blog" element={<AddBlog onAdd={handleAddBlog} />} />
        </Route>

        <Route element={<LoginLayouts />}>
             <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<RegisterLayout />}>
             <Route path="/register" element={<Register />} />
        </Route>
        <Route element={<ForgetPSLayout/>}>
             <Route path="/forgetpassword" element={<ForgetPassword/>} />
        </Route>



        {/*Dashboard Pages */}
        <Route path="/dashboard" element={<DashboardLayout />}>
             <Route index element={<Dashboard />} />
             <Route path="dashboard" element={<Homee/>} />
             <Route path="profile" element={<Profile />} />
             <Route path="analytics" element={<Analytics/>} />
             <Route path="inbox" element={<Inbox/>} />
             <Route path="chat" element={<Chat/>} />
             <Route path="posts" element={<Posts/>} />
             <Route path="Logout" element={<Logout/>} />
             <Route path="settings" element={<Settings />}/>
             <Route path="notifications" element={<Notifications />} />
             <Route path="users" element={<Users />} />
             <Route path="messages" element={<Messages />} />
             <Route path="integrations" element={<Integrations />} />
             <Route path="reports" element={<Reports />} />
             <Route path="facebook" element={<Facebook/>} />
             <Route path="instagram" element={<Instagram />} />
             <Route path="telegram" element={<Telegram />} />
          </Route>

          

      </Routes>
    </Router>
  );
}

export default App;
