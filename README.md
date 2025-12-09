# Boo Take-Home (Next.js Pages Router + TailwindCSS)

This is a minimal reproduction of the provided Boo page as a local Next.js project with mock APIs.

## How to run

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

3. Open http://localhost:3000 and click the link to the question page.

## Notes

- This is intentionally minimal to keep within a short take-home timeframe.
- Replace the package versions in package.json if you want newer releases.
- If you want me to push this to a public GitHub repo, tell me the repo name and I can prepare instructions.

## Time log (fill after you work on it)

Start: 09/12/2025, 09:56
End: 09/12/2025, 13:50

## ✅ What I Completed

- Implemented Next.js (Pages Router) project structure.
- Added TailwindCSS for styling and layout.
- Recreated the header, sidebar, and main layout in a responsive manner.
- Implemented a search bar with dark glass styling, mimicking Boo’s UI.
- Built the question detail page including:
  - Community header
  - Question box
  - Interaction buttons (like, comment, share)
  - Comment input
  - Comment list with mock data
- Created local mock API endpoints under /pages/api/.
- Ensured mobile and desktop breakpoints work properly.
- Improved UI consistency to resemble the original Boo design.

## ⚠️ What I Skipped

- Full animations or micro-interactions from the original Boo app.
- Infinite scroll and dynamic loading for comments.
- Complex state management (Zustand / Redux).
- Detailed community sidebar filtering.
- Exact pixel-perfect spacing for all breakpoints.
- Backend integration (per instructions, mock-only).

## 🔧 What I Would Improve With More Time

- Add realistic mock data that more closely matches Boo’s platform.
- Improve mobile header behavior + animation transitions.
- Add reply threads, nested comments, and collapsible sections.
- Implement theme switching (dark/light) similar to Boo.
- Add realistic loading skeletons and transitions.
- Fully match Boo’s shadows, blurs, and iconography.
- Improve accessibility (ARIA labels, roles, keyboard nav).
- Polishing the entire UI to reach pixel-perfect fidelity.
