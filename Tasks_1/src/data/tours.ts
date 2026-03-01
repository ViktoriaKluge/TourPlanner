import type { Tour } from "../models/tour";

// MOCK-DATEN

export const TOURS: Tour[] = [
  {
    id: "t-001",
    name: "Donauinsel Sunset Loop",
    description: "Entspannter Rundweg für Kopf frei bekommen.",
    start: { lat: 48.233, lon: 16.403 },
    end: { lat: 48.233, lon: 16.403 },
    distanceKm: 9.5,
    elevationGainM: 15,
    durationMin: 110,
    difficulty: "easy",
    tags: ["walk", "city", "sunset"],
    createdAt: "2026-03-01T10:00:00.000Z",
  },
  {
    id: "t-002",
    name: "Kahlenberg -> Leopoldsberg",
    description: "Kurzer Klassiker mit Aussicht. Beliebt, aber zurecht.",
    start: { lat: 48.276, lon: 16.341 },
    end: { lat: 48.275, lon: 16.347 },
    distanceKm: 6.2,
    elevationGainM: 320,
    durationMin: 140,
    difficulty: "moderate",
    tags: ["hike", "view", "vienna"],
    createdAt: "2026-03-01T10:10:00.000Z",
  },
  {
    id: "t-003",
    name: "Rax Plateau Day Tour",
    description: "Ganztagestour, alpiner. Wetter checken.",
    start: { lat: 47.700, lon: 15.796 },
    end: { lat: 47.700, lon: 15.796 },
    distanceKm: 14.8,
    elevationGainM: 780,
    durationMin: 360,
    difficulty: "hard",
    tags: ["hike", "mountain", "daytrip"],
    createdAt: "2026-03-01T10:20:00.000Z",
  },
];