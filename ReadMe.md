**Project**
- **Name:** City-Builder — eine einfache, modulare City-/Ressourcen-Simulation in JavaScript.

**Kurzbeschreibung**
- **Projekt:** Ein kleines Canvas-basiertes City-Builder-Spiel. Ressourcen (Holz, Stein, Eisen) werden über aktivierte Zellen in Ressourcenfeldern generiert. Arbeiter bewegen sich visuell zwischen Feldern und einem Lager.

**Schnellstart**
- **Voraussetzung:** Moderner Browser (Module werden verwendet). Ein lokaler statischer Server wird empfohlen, da ES-Module oft nicht per `file://` geladen werden können.
- **Server starten (PowerShell, Python 3):**
  ```powershell
  python -m http.server 8000
  ```
- **Oder mit VS Code:** Installiere die Erweiterung `Live Server` und öffne `index.html` per Live Server.
- **Aufrufen:** Öffne `http://localhost:8000` im Browser.

**Spiel starten (ohne Server)**
- Du kannst `index.html` direkt öffnen — einige Browser (z. B. ältere Firefox) erlauben Modul-Imports von `file://`, moderne Chromium-basierte Browser blockieren das jedoch.

**Bedienung / Spielprinzip**
- **Klicken:** Klicke auf eines der großen Felder (Wald, Berg, Eisen, Haus), um einzelne Zellen im 4x4-Raster umzuschalten.
- **Ressourcen:** Aktivierte Zellen führen zu einer Produktionsrate; Ressourcenwerte werden in der oberen Leiste angezeigt und alle 5 Sekunden erhöht.
- **Haus bauen:** Beim Klicken in das Haus-Feld werden Ressourcen (Standardkosten: 10 Holz, 5 Stein, 2 Eisen) abgezogen, wenn genug vorhanden ist — dadurch wird die Zelle aktiviert.
- **Arbeiter:** Arbeiter bewegen sich automatisch als visuelle Elemente (kein direkte Steuerung nötig).

**Projektstruktur**
- **`index.html`**: Einstiegspunkt, enthält das Canvas und bindet `game.js`.
- **`game.js`**: Spiel-Loop, Initialisierung der Boxen (Wald, Berg, Eisen, Haus), Worker und Anzeige.
- **`klasse.js`**: Implementation der Boxen mit 4x4-Raster, Klick-Handling und Bild-Darstellung.
- **`lager.js`**: Einfaches Objekt für das Lager (Position & Größe).
- **`worker.js`**: Worker-Klasse (Position, Größe, Validierung) — derzeit visuell.
- **`Resources.js`**: Ressourcen-Tracking und Produktionsraten (Accumulators).
- **`settings.js`**: Farben und Bildpfade (`Settings.imgs` verweist auf `../assets/...`).
- **`assets/`**: Grafiken für die Felder (Factory, Wohnhaus etc.).

**Entwicklerhinweise**
- **Module:** Projekt verwendet ES-Module (`type="module"` in `index.html`). Daher ist ein lokaler server empfehlenswert.
- **Bilderpfade:** `settings.js` verwendet relative Pfade wie `../assets/Factory.png`. Wenn du die Struktur veränderst, passe diese Pfade an.
- **Interaktion erweitern:** Die Klick-Logik in `klasse.js` steuert Auswahl und Kosten; dort kannst du Baukosten, Effekte oder neue Gebäude ergänzen.
- **Performance:** `requestAnimationFrame` wird für Rendering genutzt; Ressourcen werden mit `setInterval` alle 5s aktualisiert.

**ToDos / Ideen**
- **Persistenz:** Spielstand speichern (LocalStorage / JSON-Export).
- **UI:** Buttons für Spielgeschwindigkeit, Reset, Save/Load.
- **Balancesystem:** Kosten/Produktion auslagern und einbauen.
- **Audio & Feedback:** Klick-/Bausounds, Hover-Infos für Zellen.


**Kontakt**
- **Repo:** Lokales Projekt im Workspace. Bei Fragen zu Features oder zur Integration helfe ich gern weiter.
