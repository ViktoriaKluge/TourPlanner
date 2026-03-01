import { TOURS } from "./data/tours";
import { TourRepository } from "./repos/tourRepository";
import { TourService } from "./services/tourService";

export function createApp() {
  const repo = new TourRepository(TOURS);
  const service = new TourService(repo);

  return { service };
}