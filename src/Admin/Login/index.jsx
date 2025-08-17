import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#E1DCE6] flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-purple-300 to-purple-400 rounded-3xl p-8 w-full max-w-md shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-gray-700 mb-2">Login</h1>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="admin"
              className="block text-gray-600 font-medium mb-2">
              Admin
            </label>
            <input
              type="text"
              id="admin"
              className="w-full px-4 py-3 bg-gray-200 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
              placeholder=""
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-2">
              Parol
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 bg-gray-200 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
              placeholder=""
            />
          </div>

          <Link to="/admin/Package">
            <button
              type="submit"
              className="w-full bg-purple-900 hover:bg-purple-800 text-white font-medium py-3 px-4 rounded-xl transition-colors mt-[24px] duration-200">
              Login
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
