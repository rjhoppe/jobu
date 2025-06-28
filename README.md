# Personal Job Board

This project is a personal job board that scrapes job postings from a list of company websites and displays them on a modern web dashboard.

This project is built as a monorepo using Java with Spring Boot for the backend and a modern frontend framework.

## Project Structure

This is a monorepo with the following structure:

```
personal-job-board/
├── backend/           # Java Spring Boot application
│   ├── pom.xml       # Maven configuration
│   └── src/          # Java source code
├── frontend/          # Frontend application
│   ├── package.json  # Node.js dependencies
│   └── src/          # Frontend source code
├── shared/            # Shared types, utilities, etc.
└── docker-compose.yml # For easy development
```

## Technology Stack

### Backend
- **Java 17** with **Maven** for build management
- **Spring Boot 3** for the web application framework
- **Spring Data JPA** for database operations
- **Playwright for Java** for web scraping
- **SQLite** for data storage
- **Thymeleaf** for server-side templating

### Frontend
- **React** or **Vue.js** (to be decided)
- **TypeScript** for type safety
- **Modern CSS framework** (Tailwind CSS or similar)

## How it works

1.  The backend scraper (Java) is executed (ideally by a cron job) to start the scraping process.
2.  The scraper, using the Playwright for Java library, visits the specified company job boards.
3.  Job postings are scraped and saved into the `jobs.db` SQLite database using Spring Data JPA.
4.  The Spring Boot backend serves both a REST API and the frontend application.
5.  The frontend application displays the job data in a modern, responsive interface.

## Development

### Backend Development
```bash
cd backend
mvn spring-boot:run
```

### Frontend Development
```bash
cd frontend
npm install
npm run dev
```

### Full Stack Development
```bash
docker-compose up
``` 