# PadelTally Landing Page Project

## Project Structure

This is a Next.js application for the PadelTally iOS app landing page.

### Key Files & Directories
- `app/` - Next.js App Router pages and layouts
- `src/` - Source code (components, lib, utils)
- `components/` - React components
- `public/ios/` - iOS app screenshots (6 images)
- `app/globals.css` - Global styles with Shadcn/UI theme
- `components.json` - Shadcn/UI configuration

### Technologies
- Next.js 15.4.6 with App Router
- React 19.1.0
- TypeScript
- Tailwind CSS v4
- Shadcn/UI (New York style, neutral base color)
- Lucide React icons

## Available Scripts

**IMPORTANT: Always use pnpm for package management**

```bash
# Development with Turbopack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Shadcn/UI Setup

- Style: "new-york"
- Base Color: "neutral" 
- CSS Variables: enabled
- Components path: `@/components`
- Utils path: `@/lib/utils`
- Icon library: Lucide React

### Adding Components
```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add badge
```

## Theme Colors (from globals.css)

Light mode uses neutral colors with high contrast:
- Primary: `oklch(0.205 0 0)` (dark)
- Background: `oklch(1 0 0)` (white)
- Secondary: `oklch(0.97 0 0)` (light gray)

Dark mode automatically switches colors for accessibility.

## About PadelTally

PadelTally is the fastest way to keep score on the court.

### Key Features

**ONE-TAP SCORING**
- Tap once on Apple Watch to record each point
- Haptic feedback confirms every score—no more disputes

**SMART SET & GAME DETECTION**
- Automatic advance from 15-30-40 to Game, Set and Match
- Tie-break and golden-point rules supported

**FULL MATCH HISTORY**
- Open the iPhone companion app to view sets, games and total points
- Export or share your results with partners and coaches

**OFFLINE & BATTERY-FRIENDLY**
- Works with or without an internet connection
- Lightweight design keeps your Watch battery happy

**MADE FOR APPLE WATCH**
- Large buttons for sweaty fingers
- Always-on display compatible
- Fits every wrist size and band style

Whether you play casual rallies or weekend tournaments, PadelTally lets you focus on the fun while it handles the score. No paperwork, no guessing—just play.

## Project Goal

Create a landing page showcasing PadelTally with all features, screenshots from `/public/ios/`, and a download CTA linking to https://mlv.sh/padeltally