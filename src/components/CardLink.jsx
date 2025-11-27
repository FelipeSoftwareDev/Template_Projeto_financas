import { Link } from "react-router-dom";

export default function CardLink({ title, description, to, icon }) {
  return (
    <Link to={to}>
      <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition cursor-pointer">
        <div className="text-3xl mb-2">{icon}</div>
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </Link>
  );
}
