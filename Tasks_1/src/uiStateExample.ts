import type { Tour } from "./models/tour";

/**
 * Discriminated Union representing UI state of a tour list.
 * The `status` field acts as the discriminant.
 */

type TourListState =
  | { status: "loading" }
  | { status: "loaded"; data: Tour[] }

  | { status: "error"; message: string };

// darüber die Line auskommentieren. dafür die 2 darunter rein nehmen

/*
  | { status: "error"; message: string }
  | { status: "empty" }; 
*/

/**
 * Processes the union using type narrowing via `switch`.
 * The `never` check ensures exhaustiveness at compile time.
 */

export function renderTourList(state: TourListState): string {
  switch (state.status) {
    case "loading":
      return "Loading tours...";

    case "loaded":
      return `Loaded ${state.data.length} tours.`;

    case "error":
      return `Error: ${state.message}`;

    default: {
      // Exhaustiveness check:
      // If a new state is added and not handled above,
      // TypeScript will error here.
      const _exhaustive: never = state;
      return _exhaustive;
    }
  }
}