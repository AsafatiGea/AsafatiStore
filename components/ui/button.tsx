type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-yellow-400 text-black py-2 rounded hover:bg-red-500 hover:text-white transition"
    >
      {children}
    </button>
  );
}
