// src/pages/signup/Signup.tsx
//import Header from '../../components/Header/Header';
import ImageSection from '../../components/ImageSection/ ImageSection1';
import SignupForm from '../../components/SignupForm/SignupForm';
//import LoginForm from '../../components/LoginForm/LoginForm';
import SocialLoginButtons from '../../components/SocialLoginButtons/SocialLoginButtons1';
//import Footer from '../../components/Footer/Footer';

const Signup = () => {
    return (
        <div className="relative min-h-screen bg-white">
            {/*<Header />*/}
            
            <ImageSection />
            <div className="flex justify-center items-center w-full sm:w-1/2 p-6">
                
            <SignupForm /> 
                
            </div>

             {/* "or sign in with..." */}
             <div className="ml-72 text-[#331436] text-[16px] font-normal text-center sm:text-left font-roboto opacity-100">
                or sign in with...
            </div>
           

            <SocialLoginButtons />

          
            {/*<Footer />*/}
        </div>
    );
};

export default Signup;
