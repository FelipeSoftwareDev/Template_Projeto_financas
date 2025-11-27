import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center gap-6">
      <Link to="/home" className="font-semibold hover:text-blue-600">
        Início
      </Link>
      <Link to="/crypto" className="hover:text-indigo-700 hover:scale-120 transition">
        Cripto
      </Link>
      <Link to="/stocks" className="hover:text-indigo-700 hover:scale-120 transition">
        Ações
      </Link>
    </header>
  );
}
