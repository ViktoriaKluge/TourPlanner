import type { Tour } from "../models/tour";

export class TourRepository {
  private tours: Tour[];

  constructor(initialTours: Tour[]) {
    this.tours = [...initialTours];
  }

  getAll(): Tour[] {
    return [...this.tours];
  }

  findById(id: string): Tour | undefined {
    return this.tours.find((t) => t.id === id);
  }

  add(tour: Tour): void {
    const exists = this.tours.some((t) => t.id === tour.id);
    if (exists) throw new Error(`Tour with id '${tour.id}' already exists`);
    this.tours.push(tour);
  }

  update(id: string, patch: Partial<Omit<Tour, "id" | "createdAt">>): Tour {
    const idx = this.tours.findIndex((t) => t.id === id);
    if (idx === -1) throw new Error(`Tour with id '${id}' not found`);

    const current = this.tours[idx];
    const updated: Tour = { ...current, ...patch, id: current.id, createdAt: current.createdAt };
    this.tours[idx] = updated;
    return updated;
  }

  remove(id: string): boolean {
    const before = this.tours.length;
    this.tours = this.tours.filter((t) => t.id !== id);
    return this.tours.length !== before;
  }
}