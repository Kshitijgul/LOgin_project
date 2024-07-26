import React, { useState } from 'react';
import './LoginRegister.css';

const LoginRegister = () => {
  const [active, setActive] = useState(false);

  const toggleForm = () => {
    setActive(!active);
  };

  return (
    <section className="min-h-screen flex justify-center items-center bg-yellow-400 p-5">
      <div className={`relative w-full max-w-4xl h-[500px] bg-white shadow-lg overflow-hidden transition-transform duration-500 ${active ? 'active' : ''}`}>
        <div className="absolute inset-0 flex">
          <div className={`relative w-1/2 h-full bg-yellow-300 transition-transform duration-500 ${active ? '-translate-x-full' : 'translate-x-0'}`}>
            <img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg" alt="Sign In" className="absolute inset-0 w-full h-full object-cover" />
          </div>
          <div className={`relative w-1/2 h-full bg-white flex justify-center items-center p-10 transition-transform duration-500 ${active ? 'translate-x-full' : 'translate-x-0'}`}>
            <form onSubmit={(e) => e.preventDefault()} className="w-full">
              <h2 className="text-lg font-semibold uppercase tracking-wider text-center mb-5 text-gray-700">Sign In</h2>
              <input type="text" placeholder="Username" className="w-full p-2 bg-gray-200 text-gray-800 border-none outline-none mb-3" />
              <input type="password" placeholder="Password" className="w-full p-2 bg-gray-200 text-gray-800 border-none outline-none mb-3" />
              <input type="submit" value="Login" className="w-full max-w-[100px] p-2 bg-blue-600 text-white cursor-pointer font-medium tracking-wider transition-colors duration-500" />
              <p className="mt-5 text-sm tracking-wider text-gray-700 uppercase font-light">
                Don't have an account? <a href="#" onClick={toggleForm} className="font-semibold text-blue-600">Sign Up.</a>
              </p>
            </form>
          </div>
        </div>
        <div className="absolute inset-0 flex">
          <div className={`relative w-1/2 h-full bg-white flex justify-center items-center p-10 transition-transform duration-500 ${active ? 'translate-x-0' : '-translate-x-full'}`}>
            <form onSubmit={(e) => e.preventDefault()} className="w-full">
              <h2 className="text-lg font-semibold uppercase tracking-wider text-center mb-5 text-gray-700">Create an account</h2>
              <input type="text" placeholder="Username" className="w-full p-2 bg-gray-200 text-gray-800 border-none outline-none mb-3" />
              <input type="email" placeholder="Email Address" className="w-full p-2 bg-gray-200 text-gray-800 border-none outline-none mb-3" />
              <input type="password" placeholder="Create Password" className="w-full p-2 bg-gray-200 text-gray-800 border-none outline-none mb-3" />
              <input type="password" placeholder="Confirm Password" className="w-full p-2 bg-gray-200 text-gray-800 border-none outline-none mb-3" />
              <input type="submit" value="Sign Up" className="w-full max-w-[100px] p-2 bg-blue-600 text-white cursor-pointer font-medium tracking-wider transition-colors duration-500" />
              <p className="mt-5 text-sm tracking-wider text-gray-700 uppercase font-light">
                Already have an account? <a href="#" onClick={toggleForm} className="font-semibold text-blue-600">Sign in.</a>
              </p>
            </form>
          </div>
          <div className={`relative w-1/2 h-full bg-yellow-300 transition-transform duration-500 ${active ? 'translate-x-0' : 'translate-x-full'}`}>
            <img src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg" alt="Sign Up" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginRegister;
