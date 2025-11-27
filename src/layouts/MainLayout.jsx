import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen w-full bg-slate-50 text-gray-800">
      <Navbar />

      <main className="container mx-auto px-4 py-10">
        {children}
      </main>
    </div>
  );
}
