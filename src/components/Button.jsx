/* eslint-disable react/prop-types */
export default function Button({ text, onClick }) {
  return (
    <button
      className="py-3 px-14 border md:border-white border-maverick md:text-white text-maverick font-bold hover:bg-purple-500 hover:text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
