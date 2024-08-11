import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8; // Minimum 8 characters
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!validateEmail(email)) {
            setEmailError('Please enter a valid email address');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!validatePassword(password)) {
            setPasswordError('Password must be at least 8 characters long');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            // Proceed with form submission (e.g., call an API)
            console.log('Form submitted');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="w-full max-w-md bg-black text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">Login</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                        {emailError && <p className="text-red-500 text-sm mt-2">{emailError}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                        {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-orange-700 hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 text-white font-medium rounded-lg text-sm px-4 py-2"
                    >
                        Log In
                    </button>
                </form>
                
                <div className="mt-6 text-center">
                    <p className="text-sm mb-4 text-gray-400">Or log in with</p>
                    <div className="flex justify-center space-x-4">
                        <button
                            type="button"
                            className="flex items-center justify-center w-full bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-lg text-sm px-4 py-2"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10.9 2C6.73 2 3.19 5.45 3.19 9.6c0 3.82 3.02 6.82 6.84 6.82 1.02 0 2.04-.27 3.02-.74.2-.1.4-.23.56-.39-.18.03-.36.06-.54.08a9.18 9.18 0 01-.98.05c-3.61 0-6.48-2.87-6.48-6.49s2.87-6.48 6.48-6.48c3.32 0 6.02 2.46 6.46 5.64.12.93.02 1.8-.26 2.6-.16.48-.38.91-.64 1.29-.21.31-.5.58-.83.78-.4.25-.87.39-1.38.41-.35 0-.69-.07-1.01-.21-.3-.13-.57-.34-.77-.63a1.7 1.7 0 01-.31-.86c0-.5.16-.97.43-1.36.14-.19.31-.37.5-.54.26-.22.57-.38.92-.42a2.7 2.7 0 00.52-.11c.21-.08.41-.16.6-.25.33-.15.62-.35.85-.59.29-.28.52-.61.66-1a6.18 6.18 0 00-.33-5.26 6.18 6.18 0 00-2.17-2.38c-1.34-.92-3.04-1.39-4.84-1.39zm0 1.8c1.53 0 2.96.5 4.18 1.38.98.68 1.74 1.61 2.2 2.64.4.93.55 1.94.42 2.86-.13.9-.45 1.73-.92 2.43-.49.74-1.11 1.33-1.84 1.68-.67.34-1.39.49-2.15.43-.38 0-.76-.05-1.13-.15a3.88 3.88 0 01-1.62-.8 3.88 3.88 0 01-.8-1.63c-.1-.36-.16-.75-.16-1.13 0-.76.15-1.48.5-2.15a4.1 4.1 0 011.67-1.83 6.18 6.18 0 011.82-.92zm5.36 2.14a.64.64 0 00.64-.64v-.14a.64.64 0 00-.64-.64h-1.12c-.35 0-.64.29-.64.64v1.12c0 .35.29.64.64.64h1.12z"></path>
                            </svg>
                            GitHub
                        </button>
                        <button
                            type="button"
                            className="flex items-center justify-center w-full bg-orange-700  hover:bg-orange-600 text-white font-medium rounded-lg text-sm px-4 py-2"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 48 48">
                                <path fill="#EA4335" d="M24 9.5c3.33 0 5.55 1.3 6.85 2.38l4.96-4.96C32.6 4.42 28.82 3 24 3c-7.38 0-13.73 4.13-16.97 10.17l5.5 4.29C14.06 12.63 18.6 9.5 24 9.5z"></path><path fill="#4285F4" d="M24 42c5.68 0 10.44-1.87 13.91-5.07l-5.22-4.26C30.83 34.72 27.57 36 24 36c-6.14 0-11.32-3.96-13.19-9.44l-5.65 4.36C8.9 37.67 15.89 42 24 42z"></path><path fill="#FBBC05" d="M7.81 26.56C7.5 25.5 7.34 24.36 7.34 23.2c0-1.16.16-2.3.48-3.36L2.2 15.49A20.96 20.96 0 000 23.2c0 3.35.8 6.51 2.2 9.31l5.61-4.36z"></path><path fill="#34A853" d="M24 13.4c2.44 0 4.52.84 6.19 2.22l4.65-4.65C31.2 7.3 27.64 6 24 6 18.6 6 14.06 9.13 11.53 13.5l-5.48-4.3C7.27 5.12 14.11 1.5 24 1.5c9.18 0 16.8 6.15 19.45 14.5h-9.45v7.5h15c.26-1.54.4-3.14.4-4.74 0-1.6-.14-3.18-.4-4.74H36v-7.5h-12z"></path>
                            </svg>
                            Google
                        </button>
                    </div>
                </div>

                <p className="mt-6 text-center">Not registered yet?</p>
                <button
                    className="bg-orange-700 w-20 content-center align-middle hover:bg-orange-600 focus:ring-4 focus:ring-orange-300 text-white font-medium rounded-lg text-sm p-[9px] px-[12px] pl-[11px] m-[4px] mx-auto block"
                >
                    Register
                </button>
            </div>
        </div>
    );
};

export default LoginPage;
