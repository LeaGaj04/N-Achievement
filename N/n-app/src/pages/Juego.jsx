import { useParams } from "react-router-dom";

function Juego() {
  const { id } = useParams();

  const juego = {
    nombre: "Zelda",
    horas: "20 horas jugadas",
    imagen: "https://via.placeholder.com/400",
    logros: [
      { id: 1, nombre: "Derrota a Ganon", done: true },
      { id: 2, nombre: "Completa todos los templos", done: false },
      { id: 3, nombre: "Consigue la espada maestra", done: true },
      { id: 4, nombre: "Explora todo el mapa", done: false },
    ]
  };

  const completados = juego.logros.filter(l => l.done).length;
  const total = juego.logros.length;
  const porcentaje = Math.floor((completados / total) * 100);

  return (
    <div className="bg-dark text-white min-h-screen pb-20">

      {/* IMAGEN */}
      <img src={juego.imagen} className="w-full h-48 object-cover" />

      <div className="p-4">

        {/* INFO */}
        <h1 className="text-2xl font-bold">{juego.nombre}</h1>
        <p className="text-gray-400">{juego.horas}</p>

        {/* PROGRESO */}
        <div className="mt-4">
          <p className="text-sm mb-1">
            {completados}/{total} logros
          </p>

          <div className="w-full bg-gray-700 h-2 rounded-full">
            <div
              className="bg-primary h-2 rounded-full"
              style={{ width: `${porcentaje}%` }}
            />
          </div>
        </div>

        {/* LOGROS */}
        <h2 className="mt-6 mb-3 text-lg">Logros</h2>

        <div className="space-y-3">
          {juego.logros.map((logro) => (
            <div
              key={logro.id}
              className={`p-3 rounded-xl flex justify-between items-center ${
                logro.done ? "bg-card" : "bg-card opacity-50"
              }`}
            >
              <div>
                <p className="font-medium">{logro.nombre}</p>
              </div>

              <span className="text-xl">
                {logro.done ? "✔" : "🔒"}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Juego;