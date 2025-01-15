// src/components/SocialLoginButtons/SocialLoginButtons1.tsx
import facebookIcon from '../../assets/img-login/Socialmedialogo.svg';
import googleIcon from '../../assets/img-login/Socialmedialogo1.svg';
import { useClerk } from '@clerk/clerk-react';

const SocialLoginButtons = () => {
    const {  openSignIn } = useClerk();
    const handleSocialLogin = (platform: string) => {
        console.log(`Login via ${platform}`);
        openSignIn({
            socialStrategy: platform.toLowerCase(),
        });
    };

    return (
        <div className="absolute top-[640px] left-4 tablet:left-[80px] mx-auto tablet:w-[520px] w-full tablet:h-[56px] h-auto flex flex-col tablet:flex-row justify-center gap-4 opacity-100  mt-[200px]">
            <button
                onClick={() => handleSocialLogin('Facebook')}
                className="w-full tablet:w-[110px] h-[56px] text-white p-3 rounded-l-xl rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-100"
            >
                <img
                    src={facebookIcon}
                    alt="Facebook"
                    className="w-[24px] h-[24px]"
                />
            </button>

            <button
                onClick={() => handleSocialLogin('Google')}
                className="w-full tablet:w-[110px] h-[56px] text-white p-3 rounded-l-xl rounded-xl border border-gray-300 flex items-center justify-center hover:bg-gray-100"
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
