// src/pages/signup/Signup.tsx
//import Header from '../../components/Header/Header';
import ImageSection from '../../components/ImageSection/ ImageSection1';
import SignupForm from '../../components/SignupForm/SignupForm';
//import LoginForm from '../../components/LoginForm/LoginForm';
import SocialLoginButtons from '../../components/SocialLoginButtons/SocialLoginButtons1';
//import Footer from '../../components/Footer/Footer';


const Signup = () => {
    return (
        
        <div className="flex min-h-screen ">
           
 
            <div className="w-full sm:w-1/2 flex items-center justify-center p-0">
                <SignupForm /> 
            </div>

            <div className=" w-full sm:w-1/2 flex items-center justify-center  h-full">
                <ImageSection /> 
            </div>

            

            <SocialLoginButtons />
            
        </div>
        
    );
};


export default Signup;
