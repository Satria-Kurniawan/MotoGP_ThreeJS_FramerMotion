/* eslint-disable react/prop-types */
export default function IconButton({ onClick, icon, disabled }) {
  return (
    <button
      onClick={onClick}
      className={`text-white rounded-full p-5 border border-white hover:bg-purple-500 ${
        disabled && "opacity-20"
      }`}
    >
      {icon}
    </button>
  );
}
