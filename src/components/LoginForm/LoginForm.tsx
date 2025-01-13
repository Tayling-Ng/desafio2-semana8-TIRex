// src/components/LoginForm/LoginForm.tsx
import { useState } from 'react';

const LoginForm = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ email: string; password: string }>({
        email: '',
        password: '',
    });

    const validateEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const validatePassword = (password: string) => {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    };


    const handleLogin = () => {
        const emailValid = validateEmail(email);
        const passwordValid = validatePassword(password);

        if (!emailValid || !passwordValid) {
            setErrors({
                email: emailValid ? '' : 'Please enter a valid email address.',
                password: passwordValid
                    ? ''
                    : 'Password must be at least 8 characters long, contain one uppercase letter, one number, and one special character.',
            });
        } else {
            setErrors({ email: '', password: '' });
            console.log('Email:', email);
            console.log('Password:', password);
            //  lógica de login,chamar uma API
        }
    };

    return (
        <div className="absolute top-[140px] left-0 right-0 mx-auto tablet:left-[750px] tablet:w-[520px] w-full tablet:h-[312px] bg-white rounded-lg p-6 space-y-6 opacity-100">
            <div className="flex flex-col">
                <label htmlFor="email" className="text-[#331436] font-semibold">Email</label>
                <input
                    type="email"
                    id="email"
                    className={`mt-2 p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            <div className="flex flex-col">
                <label htmlFor="password" className="text-[#331436] font-semibold">Password</label>
                <input
                    type="password"
                    id="password"
                    className={`mt-2 p-3 border rounded-lg ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
                {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
            </div>

            <div className="flex justify-center">
                <button
                    onClick={handleLogin}
                    className="bg-[#1E293B] text-white p-3 rounded-lg w-full hover:bg-[#2d4352]"
                >
                    Login
                </button>
            </div>
        </div>
     
    );
};

export default LoginForm;