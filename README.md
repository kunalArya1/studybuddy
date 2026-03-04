# StuddyBuddy Frontend

StuddyBuddy is a modern learning platform frontend built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

It includes:

- marketing pages (home, about, contact),
- course and path browsing,
- authentication screens,
- role-based dashboard pages for student, instructor, and admin experiences.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [App Structure](#app-structure)
- [Routes](#routes)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Development Guidelines](#development-guidelines)
- [Deployment](#deployment)
- [Future Improvements](#future-improvements)

---

## Project Overview

This repository currently focuses on the **frontend layer** of StuddyBuddy.

Key goals of the app UI:

- Present courses and learning paths in a clean, discoverable format.
- Offer polished onboarding and authentication flows.
- Provide role-specific dashboard experiences for learners and educators.
- Keep components modular and reusable for faster future feature development.

---

## Tech Stack

- **Framework:** Next.js `16.1.6` (App Router)
- **UI Library:** React `19.2.3`
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Linting:** ESLint 9 + `eslint-config-next`

---

## App Structure

The codebase follows a component-driven structure with Next.js `app/` routing.

```text
src/
	app/
		(dashboard)/
			admin/
			instructor/
			student/
		about/
		contact/
		courses/
		learn/
		login/
		paths/
		signup/
		page.tsx

	components/
		about/
		auth/
		contact/
		courses/
		dashboard/
		home/
		paths/
		Navbar.tsx
		Footer.tsx
```

### Structure Notes

- `src/app/` contains route definitions and page-level composition.
- `src/components/` contains reusable UI pieces grouped by feature/domain.
- `(dashboard)` is a route group used to organize role-based dashboard screens.

---

## Routes

### Public Marketing / Info

- `/` — Home page
- `/about` — About StuddyBuddy
- `/contact` — Contact page

### Authentication

- `/login` — Login screen
- `/signup` — Signup screen

### Courses & Learning

- `/courses` — Course listing
- `/courses/[id]` — Course details
- `/learn/[courseId]` — Learning experience page

### Learning Paths

- `/paths` — Paths listing
- `/paths/[id]` — Path details

### Dashboard (Role-Based)

- `/admin` — Admin dashboard
- `/instructor` — Instructor dashboard
- `/student` — Student dashboard main
- `/student/achievements`
- `/student/bookmarks`
- `/student/certificates`
- `/student/courses`
- `/student/paths`
- `/student/settings`

---

## Getting Started

### Prerequisites

- **Node.js**: 18.18+ (or current LTS)
- **npm**: 9+

### 1) Clone the repository

```bash
git clone <your-repo-url>
cd studdybuddy
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run in development

```bash
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

---

## Available Scripts

In the project directory:

- `npm run dev` — Starts local development server.
- `npm run build` — Creates production build.
- `npm run start` — Starts production server (after build).
- `npm run lint` — Runs ESLint checks.

---

## Development Guidelines

- Use **feature-based component folders** under `src/components/`.
- Keep route files in `src/app/` focused on layout/composition.
- Prefer reusable, typed components with clear props.
- Run lint checks before opening pull requests:

```bash
npm run lint
```

---

## Deployment

This app is ready for deployment on platforms that support Next.js, such as:

- Vercel
- Netlify
- AWS / Azure / GCP (via container or Node runtime)

Typical production flow:

```bash
npm install
npm run build
npm run start
```

---
<!-- 
## Future Improvements

- Backend/API integration for real course/user data.
- Authentication/session integration.
- State management for enrolled courses and progress tracking.
- Test coverage (unit + integration + e2e).
- Accessibility and performance audit hardening.

--- -->

<!-- ## License

Add a license file (for example `MIT`) if you plan to open source this project. -->
