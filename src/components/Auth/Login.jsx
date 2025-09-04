import React, { useState } from "react";

const Login = ({handleLogin}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const submitHandler = (e) => {
      e.preventDefault();
        handleLogin(email,password)
        
        setEmail("")
        setPassword("")
  };
  
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-4">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-gray-300 text-sm">Sign in to your account</p>
          </div>
          
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="space-y-6"
          >
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email Address</label>
              <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                type="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
              />
            </div>
            
            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Password</label>
              <input
                value={password}
                onChange={(e)=>{
                  setPassword(e.target.value)
                }}
                type="password" 
                placeholder="Enter your password"
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-gray-400 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-300"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              Sign In
            </button>
          </form>
          
          {/* Footer */}
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              Task Management System
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
