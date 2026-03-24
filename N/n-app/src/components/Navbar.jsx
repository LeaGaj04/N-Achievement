function Navbar() {
  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md">
      <div className="bg-card flex justify-around py-3 text-gray-400 border-t border-gray-700 rounded-t-2xl shadow-[0_-2px_10px_rgba(0,0,0,0.5)]">
        <span className="text-primary">🏠</span>
        <span>🔍</span>
        <span>🎮</span>
        <span>🏆</span>
        <span>👤</span>
      </div>

    </div>
  );
}

export default Navbar;