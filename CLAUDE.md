# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Build
```bash
npm run build
```
The build output is placed in the `dist/` directory.

### Development Server
```bash
npm run dev
```
Starts Vite dev server (typically at http://localhost:5173)

### Preview Production Build
```bash
npm run preview
```

## Architecture Overview

### Application Type
This is a **clickable prototype** for a Swedish civic reporting application ("SHIFT") based on Figma designs. It's a single-page application (SPA) built with React and React Router, designed to demonstrate complete user flows rather than backend integration.

### Key Architectural Patterns

**1. Flow-Based Navigation**
The app is organized around 5 distinct user flows, each with multiple screens:
- **Report Flow** (`/report/*`): 5-screen linear workflow with timed transitions
- **Portal Flow** (`/portal/*`): User reports management
- **Dashboard Flow** (`/dashboard/*`): Situational awareness with map view
- **Notification Flow** (`/notification/*`): Service signup and settings
- **Social Flow** (`/social`): Community chat interface

**2. Route Organization**
Routes in `App.jsx` are grouped by feature domain. Each major feature has its own subdirectory under `src/pages/`. The routing structure mirrors the user flows documented in README.md.

**3. Styling Architecture**
- **NO CSS-in-JS or Tailwind** - Uses pure CSS in `App.css`
- All styles are in a single 1200+ line CSS file organized by feature sections
- CSS class naming follows feature-based prefixes (e.g., `.report-*`, `.dashboard-*`, `.message-*`)
- Fixed mobile viewport (375x667px) with `.app-container` wrapper

**4. State Management**
- **No global state library** (Redux, Context, etc.)
- Uses local component state (`useState`) for UI interactions
- Navigation state managed through React Router
- Timed transitions use `useEffect` with `setTimeout` (e.g., loading screens)

**5. Asset Loading**
Images and icons are loaded from Figma CDN URLs (stored as constants at top of components). These URLs expire after 7 days - they are placeholders for the prototype.

### Data Flow

**Navigation Flow Pattern:**
```
Start.jsx (Home)
  → Feature Entry Point (e.g., ReportStart.jsx)
    → Intermediate Steps (e.g., Sending.jsx → Verify.jsx → BankId.jsx)
      → Completion Screen (e.g., Thanks.jsx)
        → Navigate back to Start OR to another feature
```

**Report Flow Specifics:**
- Uses `useState` for drone type selection (air/marine)
- `navigate()` triggered by button clicks and `useEffect` timers
- No form data persistence - prototype demonstrates UI/UX only

**Component Communication:**
- Components use React Router's `useNavigate()` for programmatic navigation
- No prop drilling - each page is self-contained
- `PlaceholderPage` component used for unimplemented detail views

### External Dependencies

**Core Dependencies (production):**
- `react` + `react-dom`: v18.3.1
- `react-router-dom`: v6.22.0 (handles all navigation)

**Build Tool:**
- Vite v5.1.0 with `@vitejs/plugin-react`

**No other dependencies** - intentionally minimal to keep prototype lightweight.

## Important Notes

### Design System Adherence
The app strictly follows Material Design 3 (M3) from Figma:
- Primary color: `#6750a4` (purple for all CTAs)
- Fixed container: 375x667px (iPhone SE dimensions)
- All text uses Roboto font family
- See README.md Design System section for complete specifications

### Adding New Screens
1. Create component in appropriate `src/pages/{feature}/` directory
2. Add route to `App.jsx` within the relevant feature section (use comments)
3. Add styles to `App.css` under corresponding feature comment section
4. Use `useNavigate()` from `react-router-dom` for navigation

### Styling Conventions
- Fixed mobile container: wrap content in `<div className="app-container">`
- App bar pattern: `<div className="report-app-bar">` with back button, title, optional right icon
- All positioning uses absolute positioning within the 375x667px container
- Buttons use consistent classes: `.primary-button`, `.secondary-button`, `.back-button`

### Timed Transitions
Several screens auto-navigate after delays (mimicking loading/processing):
- `Sending.jsx`: 2 seconds → Verify
- `BankId.jsx`: 3 seconds → Thanks

Pattern: `useEffect(() => { const timer = setTimeout(...); return () => clearTimeout(timer); }, [])`

### Image Assets
Images are loaded from Figma CDN (7-day expiration). To update:
1. Use Figma MCP tools to fetch new asset URLs (MCP configured in `.mcp.json`)
2. Replace `const img* =` declarations at top of component files
3. Assets are NOT committed to repo - URLs are temporary

### Figma MCP Integration
This project includes Figma MCP server configuration in `.mcp.json` for accessing design files:
- Remote MCP server: `https://mcp.figma.com/mcp`
- Use tools like `mcp__figma__get_design_context` to fetch design specs
- Original Figma file: `nUdB08xw8yq7d6isGvGr5G` (MSB - Shift - Copy)

### Swedish Language
All UI text is in Swedish (Swedish civic application context). Button labels, screen titles, and placeholder text should remain in Swedish to match the prototype's target audience.
