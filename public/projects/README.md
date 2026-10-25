# Project Images & Screenshots Directory

Place your project screenshots or preview images in this folder (`d:/portfoli/public/projects/`).

### Recommended File Names:
1. `fortrix.png` &mdash; for **FORTRIX**
2. `secureprompt.png` &mdash; for **SecurePrompt AI**
3. `qr-phishing.png` &mdash; for **QR Phishing Detector**
4. `sleepstop.png` &mdash; for **SleepStop**

### How to use your own images:
1. Copy your screenshot image into this folder (`public/projects/`).
2. Open `src/data/projectLinks.ts`.
3. Set the `imageUrl` field:
   ```ts
   imageUrl: "/projects/fortrix.png"
   ```
4. If `imageUrl` is left empty `""`, the portfolio automatically displays the futuristic interactive coded UI mockup!
