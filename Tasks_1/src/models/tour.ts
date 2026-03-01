export type Difficulty = "easy" | "moderate" | "hard";

export interface GeoPoint {
  lat: number;
  lon: number;
}

export interface Tour {
  id: string;
  name: string;
  description?: string;

  start: GeoPoint;
  end: GeoPoint;

  distanceKm: number;
  elevationGainM?: number;
  durationMin: number;

  difficulty: Difficulty;
  tags: string[]; // z.B. ["hike", "lake", "family"]

  createdAt: string; // ISO date string
  lastFinish?: string;
}