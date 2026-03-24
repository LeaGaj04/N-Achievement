function Perfil() {

    const nivel = Math.floor(usuario.logros / 10);

    const usuario = {
        nombre: "Leandro",
        nivel: 12,
        logros: 120,
        juegos: [
            { nombre: "Zelda", progreso: "20/50" },
            { nombre: "Mario Kart", progreso: "10/30" },
            { nombre: "Pokémon", progreso: "5/40" }
        ]
    };

    return (
        <div className="bg-dark text-white min-h-screen p-4 pb-20">

            {/* HEADER */}
            <div className="flex items-center gap-4">

                {/* AVATAR */}
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-xl font-bold">
                    {usuario.nombre.charAt(0)}
                </div>

                {/* INFO */}
                <div>
                    <h1 className="text-xl font-bold">{usuario.nombre}</h1>
                    <p className="text-gray-400">Nivel {nivel}</p>
                </div>

            </div>

            {/* STATS */}
            <div className="mt-6 bg-card p-4 rounded-2xl">
                <p className="text-sm text-gray-400">Logros desbloqueados</p>
                <p className="text-2xl font-bold">{usuario.logros}</p>
            </div>
            <div className="mt-4">
                <div className="w-full bg-gray-700 h-2 rounded-full">
                    <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: "70%" }}
                    />
                </div>
            </div>

            {/* JUEGOS */}
            <h2 className="mt-6 mb-3 text-lg">Tus juegos</h2>

            <div className="space-y-3">
                {usuario.juegos.map((juego, i) => (
                    <div
                        key={i}
                        className="bg-card p-4 rounded-xl flex justify-between items-center"
                    >
                        <p>{juego.nombre}</p>
                        <p className="text-gray-400">{juego.progreso}</p>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Perfil;