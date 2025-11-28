import { useNavigate } from "react-router-dom";
import { useState } from "react";
import bg from "../../assets/loginbg.jpg";   

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    navigate("/home");
  }

  return (
    <div className="flex h-screen w-screen">
      
      {/* login section */}
      <div className="w-1/3 flex items-center justify-center bg-e1e1e1 bg-opacity-40 backdrop-blur-sm">
        <div className="w-80 flex flex-col gap-4 p-6 text-white">
          <h1 className="text-4xl font-bold mb-4">Login</h1>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <input 
              type="email" 
              placeholder="Email"
              className="p-2 rounded "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input 
              type="password" 
              placeholder="Senha"
              className="p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-between gap-2">
              <button 
                type="submit"
                className="flex-1 text-white p-2 rounded"
              >
                Entrar
              </button>

              <button 
                type="button"
                onClick={() => navigate("/register")}
                className="flex-1 text-white p-2 rounded"
              >
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* bgimage */}
      <div 
        className="w-2/3 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div>
        
      </div>
    </div>
  );
}
