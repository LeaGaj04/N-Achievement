import GameCard from "../components/GameCard";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const juegos = [
    {
      id: 1,
      nombre: "Zelda",
      tiempo: "20h jugadas",
      imagen: "https://i.imgur.com/ZXBtVw7.jpeg"
    },
    {
      id: 2,
      nombre: "Mario Kart",
      tiempo: "5h jugadas",
      imagen: "https://i.imgur.com/WKQ8G6R.jpeg"
    },
    {
      id: 3,
      nombre: "Pokémon",
      tiempo: "12h jugadas",
      imagen: "https://i.imgur.com/1X5qZ6F.jpeg"
    }
  ];

  return (
<div className="bg-dark text-white min-h-screen pb-20">
  <div className="max-w-md mx-auto p-4">

      {/* HEADER */}
      <h1 className="text-xl font-bold mb-4">Actividad reciente</h1>

      {/* ACTIVIDAD */}
      <div className="space-y-3 mt-4">
        {juegos.map((juego) => (
          <div
            key={juego.id}
            onClick={() => navigate(`/juego/${juego.id}`)}
            className="bg-card rounded-2xl overflow-hidden shadow-md hover:scale-105 transition active:scale-95"
          >
            <div>
              <p className="font-semibold">{juego.nombre}</p>
              <p className="text-gray-400 text-sm">{juego.tiempo}</p>
            </div>

            <img
              src={juego.imagen}
              className="w-full h-40 object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* GRID */}
      <h2 className="text-xl mt-6 mb-3">Todos los juegos</h2>

      <div className="grid grid-cols-3 gap-4 mt-2">
        {juegos.map((juego) => (
          <div
            key={juego.id}
            onClick={() => navigate(`/juego/${juego.id}`)}
            className="cursor-pointer"
          >
            <GameCard title={juego.nombre} image={juego.imagen} />
          </div>
        ))}
      </div>

    </div>
  </div>
  );
}

export default Home;