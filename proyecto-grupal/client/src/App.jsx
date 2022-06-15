import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ClientDetails from "./components/ClientDetails/ClientDetails";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import NavBar from "./components/NavBar/NavBar.jsx";
import RegisterForm from "./components/RegisterForm/RegisterForm.jsx";
import PsychologistDetail from "./components/PsychologistDetail/PsychologistDetail";
import Post from "./components/Post/Posts";
import FormEditClient from "./components/FormEditClient/FormEditClient";
import NotFound from "./components/404notFound/notFound";
import Blog from "./components/Blog/Blog.jsx";
import LoginForm from "./components/LoginForm/LoginForm";
import Psychologists from "./components/Psychologists/Psychologists.jsx";
import Footer from "./components/Footer/Footer";
import Faqs from "./components/faqs/Faqs";
import AddPost from "./components/AddPost/AddPost";
import Reviews from "./components/Reviews/Reviews";
import PostsDetail from "./components/Post/PostsDetail/PostsDetail.jsx";
import AdminPanelLogin from "./components/AdminPanel/AdminPanelLogin/AdminPanelLogin.jsx";
import AdminPanelHome from './components/AdminPanel/AdminPanelHome/AdminPanelHome.jsx';
import AdminPanelClients from './components/AdminPanel/AdminPanelClients/AdminPanelClients.jsx';
import AdminPanelPsychologists from './components/AdminPanel/AdminPanelPsychologists/AdminPanelPsychologists.jsx';
import AdminPanelPosts from './components/AdminPanel/AdminPanelPosts/AdminPanelPosts.jsx';
import AdminPanelPayments from './components/AdminPanel/AdminPanelPayments/AdminPanelPayments.jsx';


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Footer />} />
        <Route path="/" element={<NavBar />} />
        <Route index element={<LandingPage />} />
        <Route path="/signup" element={<RegisterForm />} />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/preguntasfrecuentes" element={<Faqs />} />
        <Route path="/home" element={<Home />} />
        <Route path="/psicologos" element={<Psychologists />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/post" element={<Post />} />
        <Route path="/createPost" element={<AddPost/>}/>
        <Route path="/home/:idUserClient" element={<ClientDetails />} />
        <Route path="/detailPsychologist/:idPsychologist" element={<PsychologistDetail />} />
        <Route path="/editprofile/:idUserClient" element={<FormEditClient />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/postdetail/:id" element={<PostsDetail />} />
        <Route path='/adminpanel/login' element={<AdminPanelLogin />} />
        <Route path='/adminpanel/inicio' element={<AdminPanelHome />} />
        <Route path='/adminpanel/clients' element={<AdminPanelClients />} />
        <Route path='/adminpanel/psychologists' element={<AdminPanelPsychologists />} />
        <Route path='/adminpanel/posts' element={<AdminPanelPosts />} />
        <Route path='/adminpanel/payments' element={<AdminPanelPayments />} />
      </Routes>
    </div>
  );
}
