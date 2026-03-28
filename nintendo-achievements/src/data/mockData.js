export const userProfile = {
  name: "NintenFan_99",
  bio: "Completando todo al 100%. ¡Esperando la Switch 2!",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ninten",
  banner: "https://images.unsplash.com/photo-1612404730960-5c71577fca11?auto=format&fit=crop&q=80&w=800&h=300",
};

export const games = [
  {
    id: 1,
    title: "Super Mario 3D Universe",
    cover: "https://placehold.co/150x200/e60012/white?text=Mario+3D",
    progress: 100,
    hours: 125,
    status: "completado",
    recent: true
  },
  {
    id: 2,
    title: "Zelda: Echoes of Time",
    cover: "https://placehold.co/150x200/1e3a8a/white?text=Zelda",
    progress: 65,
    hours: 45,
    status: "jugando",
    recent: true
  },
  {
    id: 3,
    title: "Metroid Prime 4: Beyond",
    cover: "https://placehold.co/150x200/0f172a/white?text=Metroid",
    progress: 12,
    hours: 5,
    status: "jugando",
    recent: false
  },
  {
    id: 4,
    title: "Mario Kart 9",
    cover: "https://placehold.co/150x200/ea580c/white?text=MK9",
    progress: 0,
    hours: 0,
    status: "disponible",
    recent: false
  }
];

export const achievements = [
  { id: 1, gameId: 1, name: "¡Estrella Cósmica!", desc: "Consigue todas las estrellas del mundo 1.", rarity: 45.2, unlocked: true, progress: 100 },
  { id: 2, gameId: 1, name: "Maestro del Salto", desc: "Salta 10,000 veces.", rarity: 12.5, unlocked: true, progress: 100, recent: true },
  { id: 3, gameId: 2, name: "Héroe del Tiempo", desc: "Encuentra la Espada Maestra.", rarity: 5.1, unlocked: false, progress: 80, rare: true },
  { id: 4, gameId: 3, name: "Cazador Espacial", desc: "Derrota a Ridley sin recibir daño.", rarity: 1.2, unlocked: false, progress: 0, rare: true }
];