Sobald "tsc -w" läuft in eigenem Terminal "node dist/main.js" zum Ausführen.
Alternativ über

npm run build
npm run start

----------------------------------------------------------------------------------------

Troubleshooting bei Problemen mit VSCode

Überprüfung der Installationen - Aufpassen dass VSCode nicht die PowerShell verwendet!

node -v
npm -v
tsc -v

----------------------------------------------------------------------------------------
3)
models/tour.ts -> Interface & Enums - Kann dann als JSON 1:1 zwischen TS-Frontend undd Java-Backend bewegt werden. Java macht daraus DTO/Record.

data/tours.ts -> Mockup Daten
services/tourService.ts -> Suchen/Filtern/Sortieren
main.ts -> Entry Point (zum Testen)
repos/tourRepository.ts -> CRUD

----------------------------------------------------------------------------------------
4)
Piano // Ewas Refactor hier (tourService / app.ts)
----------------------------------------------------------------------------------------
5) 
uiStateExample.ts -> Discriminated Union (Ausgabe über main.js) - Kommentar bei TourListeState beachten

Exhaustiveness wird mit never - check im switch statement gemacht