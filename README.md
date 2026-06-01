# Bankruptcy Workflow Readiness Lab

A supervised workflow-readiness training platform for bankruptcy support teams.

The landing experience includes a silent, captioned 25-second product tour and a 30-minute buyer demo built around an
urgent foreclosure-intake workflow. The platform adds buyer-facing training paths, practice-module readiness markers,
work-product examples, a clickable workflow diagram, and official case-law anchors while preserving the detailed reader.

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

## Preserved Full Course Reader

The original single-file course book is preserved intact at:

```text
public/legacy-course/index.html
```

The new chapter dashboard links directly into the preserved reader's 19 chapter anchors.
