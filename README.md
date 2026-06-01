# Bankruptcy Workflow Lab

A guided product shell for the U.S. Bankruptcy Interactive Course.

The landing experience includes a silent, captioned 25-second product tour and an interactive 15-minute reviewer demo.

The front layer follows a guided journey:

```text
Landing -> Choose Path -> Demo Mode -> Chapter Dashboard -> Module -> Practice -> Notes / Progress -> Feedback
```

## Development

```bash
npm install
npm run dev
npm run build
```

## GitHub Pages

Vite is configured with:

```js
base: "/US-Bankruptcy-Interactive-Course/"
```

The GitHub Pages workflow builds the Vite app and deploys `dist/` when changes reach `main`.

## Preserved legacy course

The original single-file course book is preserved intact at:

```text
public/legacy-course/index.html
```

The new chapter dashboard links directly into the preserved reader's 19 chapter anchors.
