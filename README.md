# EBT Dot Safari 🌍🧭

A live GPS map and heatmap for EuroBillTracker dot hunters.

[Open EBT Dot Safari](https://shortokapi.github.io/ebt-dot-safari/)

## How to use

1. Open EBT Dot Safari on your phone.
2. Tap **Download from EBT**. If necessary, EBT will ask you to sign in.
3. Return to EBT Dot Safari.
4. Tap **Load EBT Notes File** and choose the most recently downloaded file.
5. Allow location access when requested, and start hunting.

*Already downloaded a fresh Notes file? Skip step 2.*

If you deny location access, enable it later in your browser or app settings and reopen Dot Safari.

## Install on your home screen

- **iPhone:** Open EBT Dot Safari in Safari, tap **Share**, then **Add to Home Screen**.
- **Android:** Open EBT Dot Safari in Chrome, open the browser menu, then choose **Install app** or **Add to Home screen**.

The precise menu wording may vary between browser versions.

## Notes files

The download button obtains the smaller file that EBT calls its “censored” Notes CSV. It omits note comments while retaining the coordinates Dot Safari needs. The full Notes CSV is also supported.

## Features

- **Conquered-dot heatmap:** Displays your personal EBT dot map and note counts.
- **Live target compass:** Uses GPS to estimate the straight-line distance and direction to the nearest unconquered dot.
- **Dot information:** Shows the current dot, nearest unconquered dot, and individual dot statistics.
- **Installable:** Can be added to your phone’s home screen and used like an app.

## Offline use

The application and your imported dot data are stored locally. Map areas that your browser has not previously cached still require an internet connection.

## Privacy

Your CSV is processed locally and is not uploaded by Dot Safari. Dot Safari has no user accounts or analytics. Browser location services and external map providers operate under their own privacy policies.

## Grid references

Dot Safari grid references are written as `[south-to-north index, west-to-east index]` — latitude first, longitude second. The first number increases northward and the second increases eastward. These are Dot Safari references, not official EBT dot numbers.

## Credits
* **Direction**: Miguel Viterbo (lmviterbo)
* **Code Generation**: AI relay — Gemini → Claude → ChatGPT
* **Audit & Testing**: Peter Zagler (elpeza s̶p̶a̶s̶i̶b̶a̶)
