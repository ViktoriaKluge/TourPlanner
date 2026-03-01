import type { Tour, Difficulty } from "../models/tour";
import { TourRepository } from "../repos/tourRepository";

export class TourService {
  constructor(private readonly repo: TourRepository) {}

  getAll(): Tour[] {
    return this.repo.getAll();
  }

  getById(id: string): Tour | undefined {
    return this.repo.findById(id);
  }

  createTour(tour: Tour): void {
    this.repo.add(tour);
  }

  updateTourName(id: string, name: string): Tour {
    if (!name.trim()) throw new Error("Name must not be empty");
    return this.repo.update(id, { name: name.trim() });
  }

  deleteTour(id: string): boolean {
    return this.repo.remove(id);
  }

  filterByDifficulty(difficulty: Difficulty): Tour[] {
    return this.repo.getAll().filter((t) => t.difficulty === difficulty);
  }

  filterByTag(tag: string): Tour[] {
    const needle = tag.trim().toLowerCase();
    return this.repo.getAll().filter((t) =>
      t.tags.some((x) => x.toLowerCase() === needle)
    );
  }

    sortByDistance(dir: "asc" | "desc" = "asc") {
    return [...this.repo.getAll()].sort((a, b) =>
        dir === "asc" ? a.distanceKm - b.distanceKm : b.distanceKm - a.distanceKm
    );
    }

  estimatePaceMinPerKm(tour: Tour): number {
    return Math.round((tour.durationMin / tour.distanceKm) * 10) / 10;
  }
}

/*
* OLD (3)

export function listTours(tours: Tour[]): Tour[] {
  return [...tours];
}

export function findTourById(tours: Tour[], id: string): Tour | undefined {
  return tours.find((t) => t.id === id);
}

export function filterByDifficulty(tours: Tour[], difficulty: Difficulty): Tour[] {
  return tours.filter((t) => t.difficulty === difficulty);
}

export function filterByTag(tours: Tour[], tag: string): Tour[] {
  const needle = tag.trim().toLowerCase();
  return tours.filter((t) => t.tags.some((x) => x.toLowerCase() === needle));
}

export function sortByDistance(tours: Tour[], dir: "asc" | "desc" = "asc"): Tour[] {
  return [...tours].sort((a, b) =>
    dir === "asc" ? a.distanceKm - b.distanceKm : b.distanceKm - a.distanceKm
  );
}

export function estimatePaceMinPerKm(tour: Tour): number {
  // Simple heuristic: duration / distance
  return Math.round((tour.durationMin / tour.distanceKm) * 10) / 10;
}

*/