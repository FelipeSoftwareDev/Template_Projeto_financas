export default function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        className=""
        {...props}
      />
    </div>
  );
}
