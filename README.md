# Personal Job Board

This project is a personal job board that scrapes job postings from various websites and displays them on a modern web dashboard.

This project is built using Astro with TypeScript and Playwright for web scraping.

## Project Structure

```
personal-job-board/
├── frontend/          # Astro application
│   ├── package.json  # Node.js dependencies
│   ├── astro.config.mjs # Astro configuration
│   └── src/          # Source code
│       ├── components/ # Astro components
│       ├── pages/     # Pages and API routes
│       └── types/     # TypeScript type definitions
└── README.md
```

## Technology Stack

### Frontend & Backend (Astro)
- **Astro** for the web framework
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Playwright** for web scraping
- **API Routes** for backend functionality

## How it works

1. The Astro application serves both the frontend and API routes
2. API routes handle web scraping using Playwright
3. Job postings are scraped from various job sites
4. The frontend displays the job data in a modern, responsive interface
5. Users can trigger scraping via the web interface

## Development

### Installation
```bash
cd frontend
pnpm install
```

### Development Server
```bash
pnpm dev
```

### Build for Production
```bash
pnpm build
```

### Preview Production Build
```bash
pnpm preview
```

## Features

- **Web Scraping**: Scrape jobs from multiple job sites
- **Modern UI**: Clean, responsive interface built with Astro and Tailwind
- **API Routes**: Server-side functionality for scraping and data management
- **TypeScript**: Full type safety throughout the application 