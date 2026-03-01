import { createApp } from "./app";
import { renderTourList } from "./uiStateExample";
import { TOURS } from "./data/tours";

const { service } = createApp();

console.log("Alle Touren:");
console.log(service.getAll());

console.log("\nNur 'hike':");
console.log(service.filterByTag("hike"));

console.log("\nSortiert nach Distanz:");
console.log(service.sortByDistance("desc"));


console.log("\n--- Task 5: Discriminated Union Demo ---");
console.log(renderTourList({ status: "loading" }));
console.log(renderTourList({ status: "error", message: "Network failed" }));
console.log(renderTourList({ status: "loaded", data: TOURS }));