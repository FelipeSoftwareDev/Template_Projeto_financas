export default function ChartFrame({ src, alt }) {
  return (
    <div className="w-full bg-gray-100 rounded-xl border border-gray-300 overflow-hidden h-[500px] flex items-center justify-center">
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-contain" />
      ) : (
        <p className="text-gray-500"></p>
      )}
    </div>
  );
}
