# Project Setup

## Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.12.x or higher**
- **Docker**
- **Docker Compose**
- **npm** (Node Package Manager)

## Setup Instructions

### 1. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 2. Build and Start Docker Containers

```bash
docker-compose up --build
```

### 3. Start the Frontend Development Server

In a **separate terminal**, navigate to the frontend directory and start the development server:
```bash
cd frontend
npm run dev
```

Or if you need to build and start for production:
```bash
npm run build && npm run start
```

### 4. Stop Docker Containers

When you're finished working:
```bash
docker-compose down
```

## You're Ready to Go!
