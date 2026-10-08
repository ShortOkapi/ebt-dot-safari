# EBT Dot Safari 🌍🧭

A live GPS assistant for EuroBillTracker dot hunters, showing your conquered dots and guiding you towards eligible unconquered dots.

[Open EBT Dot Safari](https://shortokapi.github.io/ebt-dot-safari/) · [Releases and changes](https://github.com/ShortOkapi/ebt-dot-safari/releases)

**Guide updated:** 5 October 2026. Target area features are available from v2.1.0. Phone and browser menu wording may vary.

## How to use

Installation is optional: you can use Dot Safari in your browser or add it to your home screen.

1. Open EBT Dot Safari on your phone. Allow location access if you want the live radar; the request may appear as soon as the app opens.
2. Tap **Download from EBT**. Sign in to EBT only if asked. If signing in shows a confirmation but no download begins, return to Dot Safari and tap **Download from EBT** again. Accept **Download again** if your browser offers it.
3. Finish the download, or save the file if your browser shows an unsaved preview. See the phone-specific guidance below.
4. Return to Dot Safari. Tap **Load EBT Notes File**, then **Choose File** if offered, and select the newest Notes CSV from **Downloads** or the folder you saved to.
5. After the import, expand the radar panel to choose your **Target area**. With a usable GPS position, the radar shows your current dot and an eligible unconquered target.

*Already have a fresh Notes CSV? Skip the download and load that file directly.*

### Finding the downloaded file

**Android:** look in **Downloads**. If the new file is not there yet, check your browser’s Downloads list for progress. A completed download does not need to be saved again; dismiss **Download complete** and return to Dot Safari. You do not need **Open in app**.

**iPhone:** the download and saving steps depend on your browser. If offered **Save…**, choose **Files**, a folder and **Save**. If you are looking at an unsaved preview, use its **More…** or **Share** menu, choose **Save to Files**, select a folder and confirm **Save**. Going back from an unsaved preview does not save it. A completed download does not need another save: return to Dot Safari and choose the saved file.

Safari and Chrome on iPhone can show different menus. If you cannot find the file, open **Help if the file is missing** in Dot Safari’s download instructions. Choose the most recent file if older downloads have the same or similar names.

## Updating your conquered-dot map

1. Expand the controls panel if it is collapsed and tap **Update my map** to reopen the download and load instructions.
2. Download a fresh EBT Notes CSV, or use one you have already downloaded.
3. Tap **Load EBT Notes File** and select it.

A successful import replaces the previous conquered-dot map and recalculates the radar. **You do not need to clear your old map first.** If an import fails, the previous map is retained and the app explains the problem.

Dot Safari stores the derived dot counts and user reference locally; it does not retain a permanent connection to your CSV file or automatically download new EBT notes. Load a fresh export whenever you want your latest conquests included. Automatic target map updates, described below, are separate from your personal map.

The **Clear conquered dots** button (☒) removes your saved personal dot map after confirmation. It does not delete the CSV file on your phone.

## GPS and the radar

- Tap the **GPS status button** on the right of the radar header to turn GPS off or on. Turning it off asks for confirmation and leaves your conquered dots visible.
- If permission is denied, allow location access in your browser or installed app settings, then return and retry GPS. Your phone’s location services also need to be enabled. A waiting message means the app has not yet accepted a usable position.
- Use **Locate me** (the crosshair button) to centre the map on your position. Moving the map to inspect another area does not change the GPS position used by the radar.
- For live tracking, keep Dot Safari visible with the screen awake. Tracking resumes when you return to it; wait for an active GPS status before relying on a new reading.

The radar gives an approximate straight-line distance and a bearing from north. Distance is measured to the nearest point of the target grid cell, usually its boundary, rather than to its centre or a particular town. These are not road distances or turn-by-turn directions.

## Target areas

Expand the radar panel and use the labelled **Target area** selector. Your choice is remembered on this device, and changing it immediately recalculates the target using the current accepted GPS position.

| Target area | What qualifies | What to bear in mind |
| --- | --- | --- |
| **All land worldwide** | Dots marked as containing land by the OpenStreetMap-derived land mask, with manual corrections applied. | Land does not establish euro availability, public access or safety. The coastline-based source can include inland water; manual overrides can correct identified dots. |
| **Euro-use area** | Dots classified as **Conquerable** in the curated Euro-use map, covering land where euros are used or widely available, including Switzerland. | Known unconquerable dots are excluded, but classification is not a guarantee of banknotes, access or current conditions. |

A coastal or island dot qualifies when the selected map marks qualifying land anywhere within it. The displayed distance is to the grid cell, so the nearest point of that cell may itself be water or inaccessible.

The **OSM / Esri** choices in the map layers control change the background imagery. They do not change target eligibility.

### Target selection and radar messages

A target must satisfy both conditions:

1. It is absent from your imported conquered-dot map.
2. It is eligible under the selected target area.

The radar searches up to **150 km** using the existing distance calculation. Conquered and ineligible dots are skipped.

- **You are already in an unconquered target dot:** your current cell meets both conditions.
- **Outside the selected target area:** the Euro-use search found no eligible cells within the search radius.
- **No eligible unconquered target within 150 km:** no target satisfies both conditions within the radius. Nearby eligible dots may already be conquered.
- **Loading selected target map / Selected target map unavailable:** the selected model is not ready for calculations. Use **Retry target map** if shown, and connect to the internet if needed.

An unavailable result clears the previous target rather than keeping its guidance on screen. With no conquered-dot map loaded, load your Notes file before using the radar to find personal targets.

### Equally near targets and small GPS movements

When several eligible unconquered dots are equally near before distance rounding, expand **N equally near targets** to inspect them and choose one. Two distances both displayed as, for example, 12.3 km do not necessarily form a tie.

A separate stability rule can retain the chosen target while its computed distance remains within **10 metres** of the nearest candidate. In that case the radar labels it **Nearby Target** and explains the choice. Its own distance and bearing are displayed. An ineligible or conquered target is not retained.

## Automatic target map updates

Dot Safari automatically checks the three published target datasets: the Euro-use eligibility map, the worldwide land mask and its manual overrides.

Checks happen:

- On each app opening or page load.
- Hourly while the app is visible.
- When you return to the app, if the hourly check is due.
- Immediately when connectivity returns.

Valid changes are adopted and the radar recalculates using the current accepted GPS position. A published map correction can therefore reach Dot Safari without a new app release. A closed app checks when it is next opened; it does not run these checks continuously in the background.

If an update fails or contains invalid data, the app retains its last valid map. The target area status shows update or availability information and offers a retry when appropriate. If the device cannot save the newest map for offline use, the panel tells you.

## Offline use and saved data

After a successful online visit, the app, your derived conquered-dot data and validated target maps can remain usable offline, provided the browser retains their local storage. Included target datasets also provide fallback data when available.

Background map imagery may need an internet connection. Previously viewed tiles may be cached by the browser, but this is not a complete downloadable offline map and their continued availability is not guaranteed.

Watch for **Saved Offline** or **Not saved** when importing your personal map. Clearing browser data, private browsing or changing browsers can affect saved data. Keep your downloaded Notes CSV so you can load it again if needed.

## Install on your home screen

Installation is optional. It gives Dot Safari a home-screen icon and lets it open like an app; it does not change how your Notes file is imported.

### iPhone — Safari

1. Open Dot Safari in Safari.
2. Open **Share**. Depending on your Safari layout, this may be inside **More** or the page menu.
3. Choose **Add to Home Screen**. If it is missing from the sharing actions, look under **Edit Actions**.
4. Turn on **Open as Web App** if offered, then tap **Add**.

These are Safari instructions; Chrome’s download and installation menus can differ. See [Apple’s web app instructions](https://support.apple.com/guide/iphone/iphea86e5236/ios) for the current steps.

### Android — Chrome

1. Open Dot Safari in Chrome.
2. Open Chrome’s three-dot menu and choose **Install app**, or **Install and create shortcut → Install**. Older versions may show **Add to Home screen**.
3. Follow the installation prompts, then open Dot Safari from its icon.

You can also use an installation invitation if Chrome shows one. There is no need to wait for an invitation to use the app. See [Chrome’s web app instructions](https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid&hl=en) for the current steps.

If your personal map is not present when you first open the installed app, load your saved Notes CSV there.

## Notes files

**Download from EBT** requests the smaller file that EBT calls its **censored Notes CSV**. It omits note comments while retaining the coordinates Dot Safari needs. The full Notes CSV is also supported. Use a complete export of your notes to represent your conquered-dot map.

## Privacy

Your CSV is processed locally and is not uploaded by Dot Safari. Dot Safari has no user accounts or analytics. The saved personal map contains derived dot counts and a user reference, rather than a saved copy of all CSV contents.

EBT handles sign-in for its own download page. Dot Safari also makes network requests for background maps, application resources and target datasets. Browser location services and external map providers operate under their own privacy policies.

## Places in your nearest target

This v2.2.0 release candidate introduces destination choices. Its prepared suggestions cover **139 test dots**, including Portugal, selected mixed border and island dots, and Calais [502,429]. Wider preparation is still required before the final release.

1. Load your Notes file and enable GPS.
2. When there is an onward radar target and a usable accepted GPS fix, use **Places in target dot [row, column]** on the GPS panel. The same explicitly labelled shortcut is available in your current-dot/GPS-marker popup.
3. The heading identifies the target dot. The context line identifies your current GPS dot. Choose a suggested place; the list shows **straight-line distance from your location** and an English name beneath its local name when OSM supplies one.
4. Check the prominent **Selected destination** box and its six-decimal coordinates, then tap **Open in Google Maps**. This sends only the selected destination; Dot Safari does not continuously retarget Maps.

Choosing a place does not change the selected radar dot. The places panel also has a **Target area** selector, synchronized with the GPS panel and the saved setting. Changing it recalculates the radar target, clears the previous destination and opens the corresponding list; the target ID can change. If the selected model has no onward target, this is explained and navigation remains unavailable. Equally near dots are chosen in the existing radar controls first. There is no onward-navigation action when you are already in an eligible unconquered dot. GPS, target-area and profile changes invalidate an open picker when its reference is no longer valid; reopen it from the GPS panel. Planning from another dot is a later stage: it will need an explicit planning origin for distances and the Google Maps route.

**Euro-use** covers the Eurozone, all other countries and territories using the euro (including Kosovo and Montenegro), and Switzerland. Automatic preparation filters locations before choosing up to five suggestions for each model. Worldwide includes Euro-use and foreign locations. Missing population remains unknown; suggestions are based on settlement type and available population, rather than a claim to the five largest places. The five approved island/land-feature exceptions remain included. Falca and Légua are ordinary results, not exceptions.

### Choose on the map

Use **Choose on the map** to inspect the radar's target dot. Pan or zoom beneath the open crosshair, or tap a point. All visible grid borders are red and one CSS pixel wide. **Use this point** becomes available only for an inside point whose six-decimal handoff also remains inside. Borders, corners and rounding onto an edge are refused. Dot bounds still calculate at their original precision; existing four-decimal inspection labels remain display labels.

In Euro-use mode, prepared OSM country outlines check the point locally when available. A point in a qualifying territory proceeds directly. A foreign point shows its country in a prominent red **Outside the Euro-use area** box. Missing outlines, positions within 25 metres of a boundary and conflicting classifications show a prominent amber **Euro-use check is uncertain** box. Both warnings offer **Use anyway** or **Choose another point**; no checkbox asks you to certify the result. A point must still remain inside the selected dot. A warning you choose to accept is recorded in the selected-destination box. Cancel restores your previous map view and selection.

The outlines are clipped to the covered trial cells and stored with their place-data blocks. Checks need no per-point service request and can work with saved data offline. They classify territory, not dry land or access: administrative outlines may include territorial waters. The 25-metre uncertainty band allows for the prepared outlines' simplification and six-decimal rounding; it is not a guarantee about the accuracy of every mapped border or GPS fix. The country/territory policy must be expanded before worldwide preparation.

### Place data and offline use

**This dot is not covered by the current trial place dataset** means the manifest does not cover it. It is not evidence that no places exist there. **Place data could not be downloaded or read from saved data** means there is no usable network/cached result; connect and retry. **No listed destinations** means the prepared data covers the dot but its selected model has an empty list. None substitutes an outside-dot town or a cell-centre destination.

To test offline use, open a covered dot's list while online first, so its block is saved. Then go offline and reload: that visited block should still work. An unvisited block can be covered by the manifest yet unavailable offline because it was never downloaded. A dot outside coverage remains outside coverage both online and offline. Background tiles and Google Maps are separate services and may need a connection.

Public prepared data is requested by fixed grid block; requests contain no Notes or GPS coordinate. The manifest is checked on opening, hourly while visible, on foreground return when due and after reconnection. A block is downloaded when its dot's list is opened. Validated data is saved separately from app-version caches, with checksum, version, grid and coordinate checks. Failed updates retain the last valid block. RC1's older blocks remain readable as an offline fallback; they lack English names and arbitrary-point outlines, so their manual-point check is uncertain. Storage failures are reported.

Prepared settlement and country-boundary data is © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), under the [Open Database License](https://opendatacommons.org/licenses/odbl/). Source snapshot and geographic-policy metadata are included in the manifest. The original application code remains MIT. The maintained source of the rare exceptions is the separate **destination-overrides.json** planned alongside the worldwide land overrides; resolving it and regenerating published settlement data belong to the later preparation stage. Do not edit the generated blocks to maintain exceptions.

## Before you set off

Dot Safari cannot guarantee euro banknotes in any eligible dot. We do our best to classify dots correctly, but maps can contain mistakes and conditions can change. Check access and safety before setting off, and respect local restrictions.

No dot is worth entering a dangerous or forbidden area. And if your next conquest appears to require a submarine, please question the map before buying one.

## Help improve the Euro-use target map

Know a dot whose classification needs checking? The Euro-use map is public, and everyone is welcome to contribute — no coding needed.

Open [EBT Target Map](https://shortokapi.github.io/ebt-target-map/), select a dot, choose its classification and explain your reasoning. Your edits stay in your own working copy and do not change the published map. Use **Review Changes** to save or share a **Change Report**, then send it to [**Miguel / lmviterbo**](https://forum.eurobilltracker.com/memberlist.php?mode=viewprofile&u=448). Proposed corrections are reviewed before approved changes are applied and published.

Prefer to send a message instead? Include the dot’s **[i, j]** numbers, its place or country, and why you think it should — or should not — be reclassified. Local knowledge and supporting links are welcome. Information about a single dot can help other hunters.

## Grid references

Dot Safari grid references are written as `[south-to-north index, west-to-east index]` — latitude first, longitude second. The first number increases northward and the second increases eastward. These are Dot Safari references, not official EBT dot numbers.

Tap a dot on the map to inspect its reference, note count and coordinate bounds. An unconquered label describes your imported map; use the selected target area and radar for eligibility.

## Credits and data sources

- **Direction:** Miguel Viterbo ([lmviterbo](https://eurobilltracker.com/profile/?user=10680) = [ShortOkapi](https://github.com/shortokapi)).
- **Code generation:** AI relay — Gemini → Claude → ChatGPT.
- **Audit and testing:** Peter Zagler ([elpeza](https://eurobilltracker.com/profile/?user=77800) = [PZ42](https://github.com/PZ42)).
- **Map library:** [Leaflet](https://leafletjs.com/).
- **Background maps:** OpenStreetMap contributors and Esri, with attribution displayed on the map.
- **Curated Euro-use data and editor:** [EBT Target Map](https://github.com/ShortOkapi/ebt-target-map).
- **Worldwide land mask and manual corrections:** [EBT World Land Map](https://github.com/ShortOkapi/ebt-world-land-map).

The application code is available under the [MIT licence](LICENSE). The worldwide land mask derives from [OpenStreetMap land polygons](https://osmdata.openstreetmap.de/data/land-polygons.html), © OpenStreetMap contributors, under [ODbL 1.0](https://opendatacommons.org/licenses/odbl/1-0/). External datasets and map imagery retain their own applicable licences and terms; the application’s MIT licence does not replace them. See the source repositories for dataset provenance.