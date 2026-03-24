function GameCard({ title, image }) {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-md hover:scale-105 transition">
      <img src={image} className="w-full h-28 object-cover" />
      <div className="p-2 text-sm font-medium">{title}</div>
    </div>
  );
}

export default GameCard;