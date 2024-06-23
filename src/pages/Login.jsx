import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
// import { useHistory } from "react-router-dom";
// import { login } from "./context/auth"; // Import the login function from context

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  //   const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      //   await login(email, password); // Call the login function
      //   history.push("/dashboard");
    } catch (err) {
      setError("Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-[#F6FFF5] py-8 w-5/6 mx-auto">
        <div className="container mx-auto w-3/4 lg:w-1/2">
          <div className="flex flex-row items-center">
            {/* <img
              src="path-to-your-image.jpg"
              alt="Empower your pregnancy"
              className="w-full h-auto"
            /> */}
            <div className="flex flex-col items-center">
              <div>
                <h1 className="text-center text-xl font-bold">
                  Empower your pregnancy journey with our AI companion
                </h1>
                <h2 className="text-center text-lg mt-2">Discover</h2>
                <h2 className="text-center text-lg">TrakMama today</h2>
              </div>
              <button className="mt-4 bg-[#389346] text-white py-2 px-4 rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto w-3/4 lg:w-1/2 mt-8">
        <hr className="w-full border-green-500 my-8" />
        <h1 className="text-center mt-3 font-bold text-lg mb-1">
          Enjoy your pregnancy journey
        </h1>
        <p className="text-center">
          Get telehealth services at your fingertips delivered via emails and
          website
        </p>
        <form onSubmit={handleSubmit} className=" mt-4">
          <h2 className="text-center text-2xl mb-4 text-green-300">Login</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-[#B252AA] bg-[#F6FFF5] rounded"
              required
            />
          </div>
          <div className="mb-4 relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-[#B252AA] bg-[#F6FFF5] rounded"
              required
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <FaEyeSlash className="h-5 w-5 text-gray-500" />
              ) : (
                <FaEye className="h-5 w-5 text-gray-500" />
              )}
            </div>
          </div>
          <div className="mb-4">
            <a href="/forgot-password" className="text-[#B252AA]">
              Forgot password?
            </a>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#389346] text-white py-2 px-4 rounded-full"
              disabled={loading}
            >
              {loading ? "Loading..." : "Submit"}
            </button>
          </div>
          <p className="text-center mt-4">
            New in Trakmama?{" "}
            <a href="/signup" className="text-[#B252AA]">
              Join now
            </a>
          </p>
        </form>
      </main>
    </div>
  );
};

export default Login;
