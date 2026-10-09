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
- For live tracking, keep Dot Safari visible with the screen awake. Tracking resumes when you return to it; wait for an active GPS status before relying on a new reading. While GPS is waiting after a usable fix, the retained reading is labelled **Last known target** and the expanded panel explains that it uses the last position. The target halo is dimmed. A fresh accepted fix restores the live reading.

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

## Places, dot names and planning

This v2.2.0 release candidate covers **139 trial dots** with prepared suggestions, including Portugal, selected mixed border and island dots, and Calais. Wider data preparation remains a later stage.

Both the GPS panel and every map-dot popup offer two actions:

- **Places in this dot** inspects the starting dot, including a conquered or ineligible dot. Map inspection works without GPS or Notes. The selected area filters its places, not whether the dot can be inspected.
- **Places in nearest other target** finds the nearest eligible unconquered dot within 150 km. It always excludes the starting dot, even if that dot is itself eligible and unconquered. Load your Notes to use this personal search. If no target is available, the action stays visible with an explanation.

Opening a dot popup temporarily collapses the controls and GPS panels to make room for both actions. Closing it restores their previous state. A short-screen popup can scroll without putting its buttons beneath those panels.

From the GPS panel, the starting point is your accepted GPS position. The area selector also changes the live radar's saved target area. Temporary GPS loss or leaving the app pauses navigation; a fresh fix recovers the panel and rechecks its selection. The main radar still reports when you are already in a target dot; the second place action searches beyond that dot.

From a map popup, the starting point is the exact point you clicked. Its area selector is independent of the live GPS radar; the planning choice lasts for this visit. Place distances and the Google Maps route use this fixed start, even if you move or turn GPS off. If an ID-only entry point is added later, its exact grid centre will be the fallback origin. Returning to a map plan restores its choices when they still apply. Changing Notes invalidates a personal target plan; simple dot inspection remains usable.

The places heading identifies the whole dot, for example **Torres Vedras Dot [460, 403]**. Dot names are convenient display labels, not official EBT identifiers or automatic arrival selections. A mixed dot uses a Euro-use and a foreign representative in worldwide mode, for example **Lemos / Pustec Dot [466, 475]**; Euro-use mode shows **Lemos Dot [466, 475]**. Default representatives are selected from the full classified pools before taking each model's top five places. Names use English when supplied by OSM, otherwise the local name. Unnamed or unavailable data falls back to **Dot [row, column]**. The IDs, grid bounds and eligibility remain unchanged.

Choose a suggested place or a point on the map, then check the prominent **Selected destination** box before tapping **Open in Google Maps**. The list shows straight-line distance from its stated start and an English second line beneath a local name when OSM supplies one. Target-dot distance is measured to the cell; place distance is measured to the selected arrival point. Neither is a road distance. Map plans explicitly send both origin and destination, at six decimals; GPS lists send the selected destination and let Maps use your location. Dot labels are never used as Maps destinations. Equally near targets can be selected in the places panel. A map choice does not change the live radar's chosen dot.

A chosen destination survives an area change when it remains in the same inspected/target dot and qualifies for that model, including a listed point outside the new top five. An uncertain manual point chosen worldwide stays selected on switching to Euro-use, with its uncertainty warning and kept coordinates. Use it anyway or choose another point, beginning at those coordinates; Maps is withheld until review. A point known to be outside Euro-use is cleared on that switch. It can still be chosen deliberately in Euro-use after reviewing the warning.

**Euro-use** means the Eurozone, all other countries and territories using the euro (including Kosovo and Montenegro), and Switzerland. Automatic preparation filters places before selecting up to five suggestions independently for each model. Worldwide includes Euro-use and foreign locations. Unknown population remains unknown. The five approved island/land-feature exceptions remain included; Falca and Légua are ordinary results.

### Maintaining dot names

Edit the root **dot-name-overrides.json** to prefer a name without editing places or coordinates. Keep names without the word “Dot” or an ID: the app adds those. An entry such as `{"dot":[460,403],"name":"Torres Vedras"}` applies to both models. Optional `nameWorldwide` and `nameEuroUse` take precedence over `name` for their respective model. An optional `reason` is for maintainers. Use each dot only once in `include`.

The `exclude` array contains dot IDs, such as `[460,403]`, to force a numeric-only label. Exclusion takes precedence over any preferred or automatic name. Keep `include` and `exclude` arrays even when empty. This file changes display names only, not settlement records, arrival points, conquest or eligibility. The first entries are Praia da Adraga and Torres Vedras.

Names are checked on opening, hourly while visible, on return when due and after reconnection. Invalid or failed updates retain the last valid preferences and explain the failed update in an open places panel. Automatic names travel with requested place blocks; no full-world name index is loaded.

### Choose on the map

Pan or zoom beneath the transparent crosshair, or tap a point. Borders stay red and one CSS pixel wide. The live radar target has a permanent translucent yellow five-pixel halo. A map inspection or plan has a blue five-pixel halo while its panel is open; a coincident target is explained in the context line. The other-target GPS action also uses blue when the live radar says you are already in the starting dot. Highlights do not change boundaries, distances or eligibility.

**Use this point** requires a strictly interior raw point whose six-decimal handoff also remains interior. Borders, corners and rounding onto an edge are refused. Grid calculations retain original precision; bounds are still displayed at four decimals.

In Euro-use mode, prepared OSM country outlines check a point locally where available. Inside qualifying territory proceeds directly. Foreign points show a prominent red **Outside the Euro-use area** warning; missing outlines, positions within 25 metres of a boundary and conflicting classifications show amber **Euro-use check is uncertain**. Both offer **Use anyway** or **Choose another point**. Accepted warnings remain visible with the selected point. Cancel restores the previous map view and selection.

Outlines are clipped to covered trial cells and saved with their place blocks. They classify territory, not dry land or access, and may include territorial waters. The uncertainty band allows for simplification and six-decimal rounding. The complete country/territory policy and its agreement with the Target Map editor still need a final audit before worldwide preparation.

### Place data and offline use

**Not covered by the current trial place dataset** means the dot is outside the manifest, not that it has no places. **Place data could not be downloaded or read from saved data** means no usable downloaded or cached block is available. **No listed destinations** means the covered dot has an empty list for this model. Each case still permits a deliberate inside-dot map point. No substitute outside-dot town or automatic cell-centre destination is supplied.

Open a covered dot while online to save its block and automatic names. Those visited blocks can work offline; unvisited covered blocks may be unavailable offline. A dot outside coverage remains outside coverage. Background maps and Google Maps are separate services.

Public data is requested by grid block without transmitting Notes or GPS coordinates. The manifest and preferred names are checked on opening, hourly while visible, on return when due and after reconnection. Blocks are requested when a dot popup or places list opens. Validated data is stored separately from app-version caches. Failed updates retain the last valid block; storage failures are reported. RC1/RC2 blocks remain readable offline, with numeric dot labels when name metadata is absent. RC1 also lacks English names and country outlines.

Prepared settlement and country-boundary data is © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright), under the [Open Database License](https://opendatacommons.org/licenses/odbl/). Snapshot and policy metadata are in the manifest; application code remains MIT. Rare destination exceptions are maintained separately in **destination-overrides.json** for the later data-preparation tool. Dot-name overrides only change labels. Do not maintain either kind of exception by editing generated blocks.

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