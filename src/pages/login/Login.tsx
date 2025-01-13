// src/pages/login/login.tsx
//import Header from "../../components/Header/Header";
import ImageSection from '../../components/ImageSection/ImageSection';
import LoginForm from '../../components/LoginForm/LoginForm';
//import { useNavigate } from 'react-router-dom';
import SocialLoginButtons from '../../components/SocialLoginButtons/SocialLoginButtons';
// import Footer from '../../components/Footer/Footer';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        
        <div className="relative min-h-screen bg-white">
            {/* Apenas o Header será renderizado */}
            
            <ImageSection />
            

            {/* Título Login Information */}
            <div className="absolute top-[10px] left-0 right-0 mx-auto w-full tablet:w-[520px] text-[#331436] text-[40px] font-bold font-roboto text-center tablet:text-left tablet:left-[790px]">
                Login Information
            </div>

            {/* Subtítulo - Enter your credentials */}
            <div className="absolute top-[100px] left-0 right-0 mx-auto w-full tablet:w-[520px] text-[#331436] text-[16px] font-normal text-center tablet:text-left tablet:left-[790px]">
                Enter your credentials
            </div>

            {/* Texto "New here? Let’s take you to sign up" */}
            <div className="absolute top-[120px] left-0 right-0 mx-auto w-full tablet:w-[520px] text-[#331436] text-[16px] font-normal text-center tablet:text-left tablet:left-[790px]">
                New here? Let’s take you to <Link to="/signup" className="font-semibold text-[#4F46E5]">sign up</Link>
            </div>

            {/* Formulário de login */}
            <LoginForm />
           
            {/* Texto "or sign in with..." */}
            <div className="absolute top-[450px] left-0 right-0 mx-auto tablet:left-[990px] tablet:w-[520px] text-[#331436] text-[16px] font-normal text-center tablet:text-left font-roboto opacity-100">
                or sign in with...
            </div>

            {/* Botões de login social */}
         
            <SocialLoginButtons />
          
            

           
        </div>
        
    );
};

export default Login;