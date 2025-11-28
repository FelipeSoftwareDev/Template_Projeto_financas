import { Link } from "react-router-dom";
import iassistenteLogo from "../../assets/iassistente.png";

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight text-gray-800 hover:text-blue-600">
          <img src={iassistenteLogo} width='200 rem' alt="logo iassistente" />
        </Link>

        <div className="flex items-center text-2xl gap-6 text-gray-600">
          <Link to="/crypto" className="hover:text-blue-600">Cripto</Link>
          <Link to="/stocks" className="hover:text-blue-600">Ações</Link>
        </div>
      </nav>
    </header>
  );
}
