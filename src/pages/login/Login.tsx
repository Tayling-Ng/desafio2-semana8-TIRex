// src/pages/login/login.tsx
//import Header from "../../components/Header/Header";
import ImageSection from '../../components/ImageSection/ImageSection';
import LoginForm from '../../components/LoginForm/LoginForm';
//import { useNavigate } from 'react-router-dom';
import SocialLoginButtons from '../../components/SocialLoginButtons/SocialLoginButtons';
// import Footer from '../../components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Router>
        <div className="relative min-h-screen bg-white">
            {/* Apenas o Header será renderizado */}
            {/* <Header /> */}
            <ImageSection /> 

            {/* Título Login Information */}
            <div className="absolute top-[80px] left-0 right-0 mx-auto w-full sm:w-[520px] text-[#331436] text-[40px] font-bold font-roboto text-center sm:text-left sm:left-[790px]">
                Login Information
            </div>

            {/* Subtítulo - Enter your credentials */}
            <div className="absolute top-[150px] left-0 right-0 mx-auto w-full sm:w-[520px] text-[#331436] text-[16px] font-normal text-center sm:text-left sm:left-[790px]">
                Enter your credentials
            </div>

            {/* Texto "New here? Let’s take you to sign up" */}
            <div className="absolute top-[190px] left-0 right-0 mx-auto w-full sm:w-[520px] text-[#331436] text-[16px] font-normal text-center sm:text-left sm:left-[790px]">
                New here? Let’s take you to <Link to="/signup" className="font-semibold text-[#4F46E5]">sign up</Link>
            </div>

            {/* Formulário de login */}
            <LoginForm />
           
            {/* Texto "or sign in with..." */}
            <div className="absolute top-[560px] left-0 right-0 mx-auto sm:left-[990px] sm:w-[520px] text-[#331436] text-[16px] font-normal text-center sm:text-left font-roboto opacity-100">
                or sign in with...
            </div>

            {/* Botões de login social */}
            <SocialLoginButtons />

            {/* <Footer /> */}
        </div>
        </Router>
    );
};

export default Login;
