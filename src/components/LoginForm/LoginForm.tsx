// src/components/LoginForm/LoginForm.tsx
import { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <div className="absolute top-[240px] left-0 right-0 mx-auto sm:left-[750px] sm:w-[520px] w-full sm:h-[312px] bg-white rounded-lg p-6 space-y-6 opacity-100">
            <div className="flex flex-col">
                <label htmlFor="email" className="text-[#331436] font-semibold">Email</label>
                <input
                    type="email"
                    id="email"
                    className="mt-2 p-3 border border-gray-300 rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
            </div>

            <div className="flex flex-col">
                <label htmlFor="password" className="text-[#331436] font-semibold">Password</label>
                <input
                    type="password"
                    id="password"
                    className="mt-2 p-3 border border-gray-300 rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                />
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
