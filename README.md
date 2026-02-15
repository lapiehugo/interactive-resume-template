# Interactive Resume Template

An open-source interactive resume template. Clone it, fill in your info, deploy it.

Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **One config file** — Edit a single TypeScript file with your info
- **Multi-language** — Built-in i18n support (add as many languages as you need)
- **Dark / Light mode** — Auto-detects time of day, with manual toggle
- **5 color presets** — modern, ocean, forest, warm, minimal (or fully custom)
- **Responsive** — Mobile-first, works on all screen sizes
- **Expandable experiences** — Click to expand details (inline on desktop, modal on mobile)
- **Projects section** — Optional portfolio showcase
- **PDF download** — Optional downloadable resume
- **3D photo flip** — Click the photo for a fun easter egg
- **Accessible** — Keyboard navigation, focus trapping, ARIA labels

## Quick Start

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/interactive-resume-template.git
cd interactive-resume-template
npm install
```

### 2. Add your info

Edit `src/data/resume-config.ts` with your personal information. See [Customization Guide](./docs/CUSTOMIZATION.md) for details.

Add your photo to `public/images/photo.jpg`.

### 3. Preview locally

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

### 4. Deploy

```bash
npm run build
```

The `dist/` folder contains your static site. Deploy it anywhere. See [Deployment Guide](./docs/DEPLOYMENT.md) for step-by-step instructions.

## Color Presets

| Preset | Style |
|--------|-------|
| `modern` | Clean slate blue-gray (default) |
| `ocean` | Turquoise and cyan tones |
| `forest` | Natural green tones |
| `warm` | Wood and earth tones |
| `minimal` | Black and white with subtle accent |

Set your preset in the config:

```typescript
theme: {
  preset: 'ocean',
}
```

## Tech Stack

- [Vite](https://vite.dev/) — Fast build tool
- [React 19](https://react.dev/) — UI framework
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) — Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) — Animations

## Project Structure

```
src/
├── data/
│   ├── resume-config.ts          # YOUR CONFIG FILE (edit this!)
│   ├── resume-config.example.ts  # Example with comments
│   ├── types.ts                  # TypeScript types
│   └── presets.ts                # Color presets
├── components/
│   └── Resume/                   # All resume components
├── lib/
│   ├── i18n/                     # Language system
│   ├── theme/                    # Dark/light mode
│   └── hooks/                    # Custom hooks
└── App.tsx                       # Entry point
```

## Contributing

Contributions are welcome! Feel free to open issues or submit PRs.

## License

MIT
