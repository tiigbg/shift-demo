# SHIFT Demo App

A fully functional clickable prototype for a civic reporting application based on a Figma design. This app demonstrates how a citizen reporting system could work, with complete flows and interactions across 5 main sections.

## Features

### 1. Civil Rapportering (Civic Reporting) - Complete Flow
A complete 5-step reporting process:
- **Report Start**: Interactive compass and drone type selection (air/marine)
- **Sending**: Loading state while report is being sent
- **Verify ID**: Option to verify identity
- **BankID Integration**: Simulated BankID verification flow
- **Thanks**: Confirmation screen with navigation options

### 2. Användarportal (User Portal)
Personal dashboard for managing reports:
- View list of submitted reports
- See report status and warnings
- Access to report details
- Create new reports

### 3. Pågående Händelser (Dashboard)
Real-time situational awareness:
- List of ongoing observations
- Interactive map view with drone pins
- Observation clustering (showing count of reports)
- Quick access to report new observations

### 4. Varning (Notifications)
Alert and service management:
- Service signup cards (e.g., Civil Reporting Service)
- Notification settings with multiple options
- Radio button selection for alert preferences
- Save and cancel functionality

### 5. Sociala Nätverk (Social Networks)
Community interaction:
- Group chat interface (Kvarters-grupp)
- Message display with avatars
- Like and comment actions
- Message input with send functionality

## Tech Stack

- React 18
- React Router 6
- Vite
- CSS (no Tailwind, pure CSS implementation)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
shift-demo/
├── src/
│   ├── pages/
│   │   ├── Start.jsx                  # Main landing page with 5 navigation buttons
│   │   ├── PlaceholderPage.jsx        # Template for placeholder pages
│   │   ├── report/
│   │   │   ├── ReportStart.jsx        # Compass & drone type selection
│   │   │   ├── Sending.jsx            # Loading/sending state
│   │   │   ├── Verify.jsx             # ID verification prompt
│   │   │   ├── BankId.jsx             # BankID verification flow
│   │   │   └── Thanks.jsx             # Confirmation screen
│   │   ├── portal/
│   │   │   └── PortalMain.jsx         # User reports list
│   │   ├── dashboard/
│   │   │   ├── Dashboard.jsx          # Observations list
│   │   │   └── DashboardMap.jsx       # Map with drone pins
│   │   ├── notification/
│   │   │   └── Notification.jsx       # Service signup & settings
│   │   └── social/
│   │       └── Social.jsx             # Community chat interface
│   ├── App.jsx                        # Main app with routing
│   ├── App.css                        # All application styles
│   ├── index.css                      # Global styles
│   └── main.jsx                       # Entry point
├── index.html
├── vite.config.js
└── package.json
```

## User Flows

### Report Flow
1. Start → Select drone type (air/marine) →
2. Sending (2s) →
3. Verify ID prompt →
4. BankID verification (3s) →
5. Thanks confirmation

Navigation options at end:
- "Gå till Mina rapporter" → Portal
- "Tillbaka till start" → Home

### Portal Flow
- Home → Portal → View reports → Report details

### Dashboard Flow
- Home → Dashboard → View observations list → Map view → Report new observation

### Notification Flow
- Home → Notifications → Service signup OR Settings → Save preferences

### Social Flow
- Home → Social → View messages → Send message

## Design System

This app is based on a Figma prototype using Material Design 3 principles:

### Colors
- **Primary**: #6750a4 (Purple - main actions)
- **On Primary**: #ffffff (White text on purple)
- **Surface**: #fef7ff (Light purple surface)
- **Background**: #f0dede (Pink/beige for start screen)
- **On Surface**: #1d1b20 (Dark text)
- **On Surface Variant**: #49454f (Secondary text)
- **Success**: #4caf50 (Green for success states)

### Typography
- **Font Family**: Roboto
- **Headline Large**: 32px/40px, Bold (SHIFT logo)
- **Headline Small**: 24px/32px, Regular (Instructions)
- **Title Large**: 22px/28px, Regular (App bar titles)
- **Title Medium**: 16px/24px, Medium (Button text)
- **Body Large**: 16px/24px, Regular (Body text)
- **Body Medium**: 14px/20px, Regular (Secondary text)
- **Label Large**: 14px/20px, Medium (Small buttons)

### Layout
- **Viewport**: 375x667px (iPhone SE size)
- **Container**: Fixed mobile dimensions with shadow
- **App Bar Height**: 64px
- **Border Radius**: 16px (buttons), 12px (cards), 8px (inputs)
- **Spacing**: 8px, 16px, 24px, 32px (Material Design spacing scale)

## License

MIT
