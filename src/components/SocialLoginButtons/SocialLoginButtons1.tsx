// src/components/SocialLoginButtons/SocialLoginButtons1.tsx
import facebookIcon from '../../assets/img-login/Socialmedialogo.svg';
import googleIcon from '../../assets/img-login/Socialmedialogo1.svg';

const SocialLoginButtons = () => {
    const handleSocialLogin = (platform: string) => {
        console.log(`Login via ${platform}`);
    };

    return (
        <div className="absolute top-[640px] left-4 sm:left-[80px] mx-auto sm:w-[520px] w-full sm:h-[56px] h-auto flex flex-col sm:flex-row justify-center gap-4 opacity-100  mt-20">
            <button
                onClick={() => handleSocialLogin('Facebook')}
                className="w-full sm:w-[110px] h-[56px] text-white p-3 rounded-l-xl rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
                <img
                    src={facebookIcon}
                    alt="Facebook"
                    className="w-[24px] h-[24px]"
                />
            </button>

            <button
                onClick={() => handleSocialLogin('Google')}
                className="w-full sm:w-[110px] h-[56px] text-white p-3 rounded-l-xl rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
                <img
                    src={googleIcon}
                    alt="Google"
                    className="w-[24px] h-[24px]"
                />
            </button>

            
        </div>
      
    );
};

export default SocialLoginButtons;
