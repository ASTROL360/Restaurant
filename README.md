# Restaurant

Full-stack restaurant app with a reservation booking system.

## Backend (Express + MongoDB)

```bash
cd BACKEND
npm run dev
```

Runs on port 4000. API: `POST /api/v1/reservation/send`
with body `{ firstName, lastName, email, phone, date, time }`.

## Frontend (React + Vite)

```bash
cd FRONTEND
npm run dev
```

Runs on http://localhost:5173 (the origin allowed by backend CORS).
The reservation form posts directly to the backend API.
